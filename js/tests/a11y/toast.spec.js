import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Toast', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/toast.html')

    expectNoViolations(await analyzeA11y(page))
  })
})
