import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Collapse', () => {
  test('expanded collapse has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/collapse.html')

    await page.click('[data-coreui-toggle="collapse"]')
    await page.locator('#collapseExample.show').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
