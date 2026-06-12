import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Navigation', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/navigation.html')

    expectNoViolations(await analyzeA11y(page))
  })

  test('stays accessible with an expanded nav group', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/navigation.html')

    await page.click('.nav-group-toggle')
    await page.locator('.nav-group.show').waitFor()

    expectNoViolations(await analyzeA11y(page))
  })
})
