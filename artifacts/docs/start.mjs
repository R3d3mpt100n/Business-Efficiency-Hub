import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.REPLIT_DEPLOYMENT === '1';

if (isProduction) {
  console.log('[start] Production mode — starting static server with gzip');
  const child = spawn('node', [join(__dirname, 'server.prod.mjs')], {
    stdio: 'inherit',
    env: process.env,
  });
  child.on('exit', (code) => process.exit(code ?? 0));
} else {
  console.log('[start] Dev mode — starting Vite dev server');
  const child = spawn(
    'node',
    [
      join(__dirname, 'node_modules/.bin/vite'),
      '--config', 'vite.config.ts',
      '--host', '0.0.0.0',
    ],
    { stdio: 'inherit', cwd: __dirname, env: process.env },
  );
  child.on('exit', (code) => process.exit(code ?? 0));
}
