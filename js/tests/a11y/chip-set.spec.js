import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Chip set', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/chip-set.html')

    expectNoViolations(await analyzeA11y(page))
  })
})
