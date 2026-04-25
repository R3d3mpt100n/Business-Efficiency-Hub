import http from 'http';
import { readFileSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Readable } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, 'dist/public');
const PORT = parseInt(process.env.PORT || '3000', 10);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.txt':  'text/plain; charset=utf-8',
  '.webp': 'image/webp',
};

const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.json', '.svg', '.txt']);

const gzCache = new Map();

function resolveFilePath(urlPath) {
  const clean = (urlPath || '/').split('?')[0].replace(/\/$/, '') || '/';
  let filePath = join(distDir, clean);

  if (existsSync(filePath) && statSync(filePath).isFile()) return filePath;

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    const idx = join(filePath, 'index.html');
    if (existsSync(idx)) return idx;
  }

  const withHtml = filePath + '.html';
  if (existsSync(withHtml)) return withHtml;

  return join(distDir, 'index.html');
}

async function handleRequest(req, res) {
  const filePath = resolveFilePath(req.url);
  const ext = extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  const isAsset = (req.url || '').startsWith('/assets/');
  const cacheControl = isAsset
    ? 'public, max-age=31536000, immutable'
    : 'public, max-age=600, must-revalidate';

  const acceptsGzip = (req.headers['accept-encoding'] || '').includes('gzip');
  const shouldGzip = acceptsGzip && COMPRESSIBLE.has(ext);

  let raw;
  try {
    raw = readFileSync(filePath);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
    return;
  }

  res.setHeader('Content-Type', mime);
  res.setHeader('Cache-Control', cacheControl);
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (shouldGzip) {
    if (gzCache.has(filePath)) {
      const gz = gzCache.get(filePath);
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Vary', 'Accept-Encoding');
      res.setHeader('Content-Length', gz.length);
      res.writeHead(200);
      res.end(gz);
      return;
    }

    const gz = await new Promise((resolve, reject) => {
      const chunks = [];
      const stream = Readable.from(raw).pipe(createGzip({ level: 6 }));
      stream.on('data', (c) => chunks.push(c));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });

    gzCache.set(filePath, gz);
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Vary', 'Accept-Encoding');
    res.setHeader('Content-Length', gz.length);
    res.writeHead(200);
    res.end(gz);
  } else {
    res.setHeader('Content-Length', raw.length);
    res.writeHead(200);
    res.end(raw);
  }
}

const server = http.createServer(async (req, res) => {
  try {
    await handleRequest(req, res);
  } catch (err) {
    console.error('Server error:', err);
    if (!res.headersSent) {
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[prod] Serving ${distDir} on port ${PORT} with gzip + cache headers`);
});
