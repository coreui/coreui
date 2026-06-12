import { expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

export const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa']

export const DISABLED_RULES = []

export async function analyzeA11y(page, { include, tags = WCAG_TAGS, disableRules = DISABLED_RULES } = {}) {
  let builder = new AxeBuilder({ page }).withTags(tags)

  if (disableRules.length > 0) {
    builder = builder.disableRules(disableRules)
  }

  if (include) {
    builder = builder.include(include)
  }

  return builder.analyze()
}

const formatViolations = violations => violations
  .map(({ id, impact, help, helpUrl, nodes }) => {
    const targets = nodes
      .map(({ target, html }) => `    ${target.join(' ')}\n      ${html}`)
      .join('\n')
    return `  [${impact}] ${id} — ${help} (${helpUrl})\n${targets}`
  })
  .join('\n\n')

export function expectNoViolations(results) {
  const { violations } = results
  const message = `axe: ${violations.length} accessibility violation(s):\n${formatViolations(violations)}`
  expect(violations, message).toEqual([])
}
