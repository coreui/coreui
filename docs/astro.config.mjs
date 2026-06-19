import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { coreuiDocs } from '@coreui/astro-docs/integration'

export default defineConfig({
  // Publish URL (site + base) is config-driven: coreuiDocs() reads `seo.url` from
  // src/data/config.yml and sets Astro's `site` + `base` from it.
  // Vanilla JS docs render the examples as static HTML (no framework island), so there's
  // no React/Vue integration — just the engine + MDX.
  integrations: [...coreuiDocs(), mdx()],
})
