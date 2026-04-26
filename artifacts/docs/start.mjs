import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { createServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.REPLIT_DEPLOYMENT === '1';
const port = Number(process.env.PORT) || 3000;

if (isProduction) {
  console.log('[start] Production mode — Express static server (no redirects)');
  const { default: express } = await import('express');
  const { default: serveStatic } = await import('serve-static');

  const app = express();
  const distDir = join(__dirname, 'dist/public');

  // Known old / misspelled URLs — permanent redirect to the correct canonical page
  const PERMANENT_REDIRECTS = {
    '/pro-systems.html': '/pro',
    '/pro-systems':      '/pro',
    '/index.html':       '/',
    '/docs.html':        '/docs',
    '/tools.html':       '/tools',
    '/templates.html':   '/templates',
  };

  app.use((req, res, next) => {
    const target = PERMANENT_REDIRECTS[req.path];
    if (target) return res.redirect(301, target);
    next();
  });

  // 1. Serve real files (js, css, images, etc.) directly — no redirect for dirs
  app.use(serveStatic(distDir, { redirect: false, index: false }));

  // 2. For paths that map to a prerendered directory, serve index.html directly
  //    (200 internal rewrite — no 301 redirect)
  app.use((req, res, next) => {
    const raw = req.path.replace(/\/+$/, '') || '/';
    const candidates = [
      join(distDir, raw, 'index.html'),  // e.g. /docs/what-is-an-ein/index.html
      join(distDir, raw + '.html'),       // e.g. /docs/what-is-an-ein.html (flat fallback)
    ];
    for (const file of candidates) {
      if (existsSync(file)) {
        return res.sendFile(file);
      }
    }
    next();
  });

  // 3. Everything else is a real 404 — do NOT silently serve the home page.
  //    This prevents search engines treating ghost URLs as real pages.
  app.use((req, res) => {
    const notFoundFile = join(distDir, '404', 'index.html');
    if (existsSync(notFoundFile)) {
      return res.status(404).sendFile(notFoundFile);
    }
    res.status(404).send('<!doctype html><html><head><title>404 Not Found | Ledgely</title><meta name="robots" content="noindex"></head><body><h1>Page not found</h1><p><a href="/">Go to Ledgely home</a></p></body></html>');
  });

  app.listen(port, '0.0.0.0', () => {
    console.log(`[start] Listening on port ${port}`);
  });
} else {
  console.log('[start] Dev mode — starting Vite dev server');
  const server = await createServer({
    configFile: `${__dirname}/vite.config.ts`,
    root: __dirname,
  });
  await server.listen();
  server.printUrls();
}
