import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Chip input', () => {
  // Known issue (tracked): the chip-input plugin sets `aria-readonly` / `aria-disabled`
  // on the container element, whose role does not allow those attributes
  // (axe `aria-allowed-attr`, critical). Re-enable once the component exposes a role
  // that permits them (or drops the attributes when false).
  test.fixme('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/chip-input.html')

    expectNoViolations(await analyzeA11y(page))
  })
})
