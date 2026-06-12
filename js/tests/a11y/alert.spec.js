import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Alert', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/alert.html')

    expectNoViolations(await analyzeA11y(page))
  })
})
