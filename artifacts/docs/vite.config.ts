import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

// Moves the Vite-injected CSS <link> to appear BEFORE all script tags and
// adds an early <link rel="preload" as="style"> so the browser fetches CSS
// in parallel with the HTML rather than waiting for JS to be parsed first.
const cssPriorityPlugin = {
  name: 'css-first',
  apply: 'build' as const,
  transformIndexHtml: {
    order: 'post' as const,
    handler(html: string) {
      const cssLinkRe = /\n?\s*<link rel="stylesheet" crossorigin href="([^"]+)">/;
      const m = html.match(cssLinkRe);
      if (!m) return html;
      const cssHref = m[1];
      const cssStylesheet = `<link rel="stylesheet" crossorigin href="${cssHref}">`;
      const cssPreload    = `<link rel="preload" as="style" href="${cssHref}">`;
      // Remove from current position (after module scripts)
      html = html.replace(m[0], '');
      // Insert BEFORE our first inline <script> so the preload scanner finds
      // it immediately at the top of <head>, well before any JS tags.
      html = html.replace(
        '<script>if(location.hostname',
        `${cssPreload}\n    ${cssStylesheet}\n    <script>if(location.hostname`,
      );
      return html;
    },
  },
};

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    cssPriorityPlugin,
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          // Keep jspdf and html2canvas out of named chunks so they stay
          // inside the lazy BusinessStarter/ToolRouter chunks and are NOT
          // added to the main-page modulepreload list.
          if (id.includes("jspdf") || id.includes("html2canvas")) return;
          if (id.includes("react-dom"))   return "react-dom";
          if (id.includes("dompurify"))   return "dompurify";
          if (id.includes("@tanstack"))   return "react-query";
          return "vendor";
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
