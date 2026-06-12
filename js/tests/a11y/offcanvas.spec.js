import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Offcanvas', () => {
  test('shown offcanvas has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/offcanvas.html')

    await page.click('[data-coreui-toggle="offcanvas"]')
    await page.locator('.offcanvas.show').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
