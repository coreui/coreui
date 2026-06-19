import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Docs pages live here (not in src/pages/), so the layout is applied once by the
// catch-all route — no per-file `layout:` frontmatter. Mirrors Bootstrap's site.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    name: z.string().optional(),
    description: z.string().optional(),
    /** Marks a pro component page — suppresses Carbon Ads, shows the PRO banner. */
    pro: z.boolean().optional(),
    /** Bootstrap-compat banner. */
    bootstrap: z.union([z.boolean(), z.string()]).optional(),
    /** Pre-release / RC banner. */
    preRelease: z.union([z.boolean(), z.string()]).optional(),
    /** Component slugs (@coreui/internal-links keys) for the "other frameworks" section. */
    otherFrameworks: z.array(z.string()).optional(),
    /** Page-specific extra stylesheets / scripts (URLs or root-absolute paths). */
    css: z.array(z.string()).optional(),
    js: z.array(z.string()).optional(),
  }),
})

export const collections = { docs }
