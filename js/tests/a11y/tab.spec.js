import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Tab', () => {
  test('has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/tab.html')

    expectNoViolations(await analyzeA11y(page))
  })

  test('stays accessible after switching tab', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/tab.html')

    await page.click('#profile-tab')
    await page.locator('#profile-tab-pane.active').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
