import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Popover', () => {
  test('shown popover has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/popover.html')

    await page.click('[data-coreui-toggle="popover"]')
    await page.locator('.popover').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
