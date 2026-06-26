import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { coreuiDocs } from '@coreui/astro-docs/integration'

export default defineConfig({
  // Publish URL (site + base) is config-driven: coreuiDocs() reads `seo.url` from
  // src/data/config.yml and sets Astro's `site` + `base` from it.
  // Vanilla JS docs render the examples as static HTML (no framework island), so there's
  // no React/Vue integration — just the engine + MDX.
  //
  // Docs are the Astro root (docs/) but dependencies live at the repo root, so the
  // library project has no docs/node_modules. Send Astro's and Vite's caches to the
  // repo-root `.cache/` (where eslint/stylelint caches already live; gitignored), so
  // the build never recreates docs/node_modules. Paths are relative to this root.
  cacheDir: '../.cache/astro',
  vite: {
    cacheDir: '../.cache/vite',
    // lz-string (used by the engine's sandbox script) is a UMD/CJS package with no ESM
    // entry, and Vite's dep scanner doesn't reach the lazily-loaded sandbox script, so it
    // gets served raw and `import { compressToBase64 }` fails in dev. Force pre-bundling.
    optimizeDeps: { include: ['lz-string'] }
  },
  integrations: [...coreuiDocs(), mdx()],
})
