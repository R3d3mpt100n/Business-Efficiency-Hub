import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// --- Browser API polyfills (must be set before any module imports) ---

if (typeof globalThis.location === 'undefined') {
  globalThis.location = {
    href: 'http://localhost/',
    origin: 'http://localhost',
    protocol: 'http:',
    host: 'localhost',
    hostname: 'localhost',
    port: '',
    pathname: '/',
    search: '',
    hash: '',
    assign: () => {},
    replace: () => {},
    reload: () => {},
    toString: () => 'http://localhost/',
  };
}

if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis;
}

if (typeof globalThis.Event === 'undefined') {
  globalThis.Event = class Event {
    constructor(type, opts = {}) {
      this.type = type;
      this.bubbles = opts.bubbles ?? false;
      this.cancelable = opts.cancelable ?? false;
      this.arguments = undefined;
    }
  };
}

if (typeof globalThis.CustomEvent === 'undefined') {
  globalThis.CustomEvent = class CustomEvent extends globalThis.Event {
    constructor(type, opts = {}) {
      super(type, opts);
      this.detail = opts.detail ?? null;
    }
  };
}

if (typeof globalThis.addEventListener === 'undefined') {
  globalThis.addEventListener = () => {};
  globalThis.removeEventListener = () => {};
  globalThis.dispatchEvent = () => true;
}

if (typeof globalThis.history === 'undefined') {
  globalThis.history = {
    pushState: () => {},
    replaceState: () => {},
    go: () => {},
    back: () => {},
    forward: () => {},
    length: 1,
    state: null,
  };
}

if (typeof globalThis.navigator === 'undefined') {
  globalThis.navigator = { userAgent: 'Node.js' };
}

if (typeof globalThis.matchMedia === 'undefined') {
  globalThis.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
}

const localStore = {};
if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = {
    getItem: (k) => localStore[k] ?? null,
    setItem: (k, v) => { localStore[k] = String(v); },
    removeItem: (k) => { delete localStore[k]; },
    clear: () => { Object.keys(localStore).forEach((k) => delete localStore[k]); },
    get length() { return Object.keys(localStore).length; },
    key: (i) => Object.keys(localStore)[i] ?? null,
  };
}

if (typeof globalThis.sessionStorage === 'undefined') {
  const store = {};
  globalThis.sessionStorage = {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i] ?? null,
  };
}

if (typeof globalThis.document === 'undefined') {
  globalThis.document = {
    createElement: () => ({
      style: {},
      setAttribute: () => {},
      appendChild: () => {},
      removeChild: () => {},
    }),
    body: {
      appendChild: () => {},
      removeChild: () => {},
      style: {},
    },
    head: { appendChild: () => {}, removeChild: () => {} },
    documentElement: { style: {} },
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
  };
}

// -------------------------------------------------------------------

// Load the SSR bundle (after all polyfills are applied)
const serverEntry = resolve(root, 'dist/server/entry-server.js');
const { render, ROUTES } = await import(serverEntry);

// Read the client build HTML template
const template = readFileSync(resolve(root, 'dist/public/index.html'), 'utf-8');

console.log(`\nPrerendering ${ROUTES.length} routes...\n`);

let ok = 0;
let fail = 0;

const BASE_ORIGIN = 'https://ledgely.online';

for (const url of ROUTES) {
  try {
    const appHtml = render(url);

    // Canonical: always use trailing-slash form (matches server redirect behaviour)
    const canonicalPath = url === '/' ? '/' : url.replace(/\/?$/, '/');
    const canonicalUrl = `${BASE_ORIGIN}${canonicalPath}`;

    const html = template
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )
      .replace(
        /<link rel="canonical" href="[^"]*"\s*\/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );

    let filePath;
    if (url === '/') {
      filePath = resolve(root, 'dist/public/index.html');
    } else {
      const segments = url.replace(/^\//, '').split('/');
      filePath = resolve(root, 'dist/public', ...segments, 'index.html');
    }

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, html, 'utf-8');

    console.log(`  ✓ ${url}`);
    ok++;
  } catch (err) {
    console.error(`  ✗ ${url}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} succeeded, ${fail} failed.\n`);

// --- Generate sitemap.xml from ROUTES ---

const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

const TOP_LEVEL = new Set(['/', '/docs', '/tools', '/templates', '/pro']);

function sitemapEntry(url) {
  const canonical = url === '/' ? '/' : url.replace(/\/?$/, '/');
  const loc = `${BASE_ORIGIN}${canonical}`;
  const priority = url === '/' ? '1.0' : TOP_LEVEL.has(url) ? '0.8' : '0.7';
  const changefreq = url === '/' ? 'weekly' : TOP_LEVEL.has(url) ? 'weekly' : 'monthly';
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTES.map(sitemapEntry),
  '</urlset>',
  '',
].join('\n');

const sitemapPath = resolve(root, 'dist/public/sitemap.xml');
writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`Sitemap written: ${ROUTES.length} URLs → dist/public/sitemap.xml\n`);

if (fail > 0) process.exit(1);
