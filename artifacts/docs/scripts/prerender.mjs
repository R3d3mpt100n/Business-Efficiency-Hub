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
const { render, ROUTES, articles, tools, proSystems } = await import(serverEntry);

// Read the client build HTML template
const template = readFileSync(resolve(root, 'dist/public/index.html'), 'utf-8');

console.log(`\nPrerendering ${ROUTES.length} routes...\n`);

let ok = 0;
let fail = 0;

const BASE_ORIGIN = 'https://ledgely.online';
const OG_IMAGE = `${BASE_ORIGIN}/og-image.png`;
const SITE_NAME = 'Ledgely';

// Build lookup maps
const articleBySlug = Object.fromEntries(articles.map(a => [a.slug, a]));
const toolBySlug    = Object.fromEntries(tools.map(t => [t.slug, t]));
const proBySlug     = Object.fromEntries(proSystems.map(p => [p.slug, p]));

// Static page metadata for non-data-driven routes
const STATIC_META = {
  '/': {
    title: 'Ledgely — Small Business Systems',
    description: 'Clear answers, simple tools, and templates for small business owners. Step-by-step guides for EIN, ITIN, taxes, and business setup.',
  },
  '/docs': {
    title: 'Free Business Guides | Ledgely',
    description: 'Step-by-step guides for EIN, ITIN, business registration, expense tracking, invoicing, and financial basics — in plain English.',
  },
  '/tools': {
    title: 'Free Business Tools | Ledgely',
    description: 'Free in-browser tools for small businesses: budget estimator, invoice generator, expense tracker, and cash flow planner.',
  },
  '/templates': {
    title: 'Free Business Templates | Ledgely',
    description: 'Ready-to-use templates for small businesses: expense trackers, checklists, cash flow planners, and operational documents.',
  },
  '/pro': {
    title: 'Pro Systems | Ledgely',
    description: 'Complete step-by-step systems with templates and checklists for serious small business owners. Business Starter, Financial Control, and more.',
  },
  '/pro/business-starter': {
    title: 'Business Starter System | Ledgely Pro',
    description: 'The complete step-by-step system to legally register your business, get your tax IDs, and set up your finances from scratch.',
  },
};

function truncate(str, max = 155) {
  if (!str) return '';
  return str.length <= max ? str : str.slice(0, max - 1).trimEnd() + '…';
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getPageMeta(url) {
  // Article page
  const articleMatch = url.match(/^\/docs\/(.+)$/);
  if (articleMatch) {
    const article = articleBySlug[articleMatch[1]];
    if (article) {
      return {
        title: `${article.title} | Ledgely`,
        description: truncate(article.description),
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: truncate(article.description),
          url: `${BASE_ORIGIN}/docs/${article.slug}/`,
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: BASE_ORIGIN,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BASE_ORIGIN}/docs/${article.slug}/`,
          },
        },
      };
    }
  }

  // Tool page
  const toolMatch = url.match(/^\/tools\/(.+)$/);
  if (toolMatch) {
    const tool = toolBySlug[toolMatch[1]];
    if (tool) {
      return {
        title: `${tool.title} | Ledgely`,
        description: truncate(tool.description),
        schema: {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: tool.title,
          description: truncate(tool.description),
          url: `${BASE_ORIGIN}/tools/${tool.slug}/`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          provider: { '@type': 'Organization', name: SITE_NAME, url: BASE_ORIGIN },
        },
      };
    }
  }

  // Pro system page
  const proMatch = url.match(/^\/pro\/(.+)$/);
  if (proMatch) {
    const pro = proBySlug[proMatch[1]];
    if (pro) {
      return {
        title: `${pro.title} | Ledgely Pro`,
        description: truncate(pro.description),
        schema: null,
      };
    }
  }

  // Static pages
  const meta = STATIC_META[url];
  if (meta) return { ...meta, schema: null };

  return { title: `${SITE_NAME}`, description: '', schema: null };
}

function buildSeoHead(url, canonicalUrl, meta) {
  const { title, description, schema } = meta;
  const safeTitle   = escapeAttr(title);
  const safeDesc    = escapeAttr(description);
  const safeUrl     = escapeAttr(canonicalUrl);
  const safeSite    = escapeAttr(SITE_NAME);
  const safeImage   = escapeAttr(OG_IMAGE);

  const lines = [
    `<meta name="robots" content="index, follow" />`,
    `<meta name="googlebot" content="index, follow" />`,
    `<meta name="bingbot" content="index, follow" />`,
    `<meta name="description" content="${safeDesc}" />`,
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDesc}" />`,
    `<meta property="og:url" content="${safeUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${safeSite}" />`,
    `<meta property="og:image" content="${safeImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDesc}" />`,
    `<meta name="twitter:image" content="${safeImage}" />`,
  ];

  if (schema) {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    );
  }

  return lines.join('\n    ');
}

for (const url of ROUTES) {
  try {
    const appHtml = render(url);

    // Canonical: no trailing slash (served as 200 directly, no redirect)
    const canonicalPath = url === '/' ? '/' : url.replace(/\/+$/, '');
    const canonicalUrl = `${BASE_ORIGIN}${canonicalPath}`;

    const meta = getPageMeta(url);
    const seoHead = buildSeoHead(url, canonicalUrl, meta);

    const html = template
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )
      .replace(
        /<link rel="canonical" href="[^"]*"\s*\/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${escapeAttr(meta.title)}</title>`
      )
      .replace('<!--SEO_HEAD-->', seoHead);

    // Write dir/index.html — artifact.toml rewrites serve both /slug and /slug/
    // as 200 directly (no redirect).
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
  const canonical = url === '/' ? '/' : url.replace(/\/+$/, '');
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

// --- Bing Webmaster API: submit all URLs on every build ---
const BING_API_KEY = process.env.BING_WEBMASTER_API_KEY;
if (BING_API_KEY) {
  // Bing daily quota is 10–100 URLs depending on account tier.
  // Prioritise: home, top-level sections, then article pages.
  const BING_QUOTA = 100;
  const priority = (r) => (r === '/' ? 0 : TOP_LEVEL.has(r) ? 1 : 2);
  const sorted = [...ROUTES].sort((a, b) => priority(a) - priority(b));
  const urlList = sorted.slice(0, BING_QUOTA).map(r => `${BASE_ORIGIN}${r === '/' ? '' : r}`);
  try {
    const res = await fetch(
      `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ siteUrl: BASE_ORIGIN, urlList }),
      }
    );
    const text = await res.text();
    if (res.ok) {
      console.log(`Bing: submitted ${urlList.length} URLs → HTTP ${res.status} ${text}`);
    } else {
      console.warn(`Bing: submission failed → HTTP ${res.status} ${text}`);
    }
  } catch (err) {
    console.warn(`Bing: submission error → ${err.message}`);
  }
} else {
  console.log('Bing: BING_WEBMASTER_API_KEY not set — skipping URL submission.');
}

if (fail > 0) process.exit(1);
