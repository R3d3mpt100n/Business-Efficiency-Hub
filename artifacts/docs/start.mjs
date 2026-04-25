import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.REPLIT_DEPLOYMENT === '1';

if (isProduction) {
  console.log('[start] Production mode — Replit serves dist/public as static files');
  process.exit(0);
} else {
  console.log('[start] Dev mode — starting Vite dev server');
  const server = await createServer({
    configFile: `${__dirname}/vite.config.ts`,
    root: __dirname,
  });
  await server.listen();
  server.printUrls();
}
