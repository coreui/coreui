import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Sidebar', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/sidebar.html')

    expectNoViolations(await analyzeA11y(page))
  })
})
