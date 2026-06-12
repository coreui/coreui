import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Scrollspy', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/scrollspy.html')

    expectNoViolations(await analyzeA11y(page))
  })
})
