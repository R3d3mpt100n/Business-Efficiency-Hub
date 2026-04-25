# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- `docs` (`@workspace/docs`) — React + Vite documentation site for small business systems & efficiency. Pages: Home (`/`), Docs index (`/docs`), Article (`/docs/:slug`), Tools (`/tools`, `/tools/:slug`), Templates (`/templates`), Pro Systems (`/pro`, `/pro/:slug`). Articles defined in `src/data/articles.ts`. Includes search/filter, category sidebar, and reserved layout slots for future affiliate links and resource sections.

### Prerendering

Build generates full static HTML for all 29 routes using Vite SSR:
- `src/entry-server.tsx` — SSR entry point; exports `render(url)` and `ROUTES`
- `vite.ssr.config.ts` — Vite SSR build config (outputs to `dist/server/`)
- `scripts/prerender.mjs` — Iterates all routes, calls `render()`, injects into `index.html` template, writes `dist/public/{route}/index.html`
- `src/main.tsx` — Uses `hydrateRoot` when prerendered content exists, `createRoot` otherwise

Build order: `vite build (client)` → `vite build --ssr (server bundle)` → `node scripts/prerender.mjs`

The artifact.toml routing rules send `/docs/:slug`, `/tools/:slug`, `/pro/:slug` to their respective prerendered `index.html` files before falling back to the SPA shell.
