import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Dropdown', () => {
  test('open dropdown has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/dropdown.html')

    await page.click('[data-coreui-toggle="dropdown"]')
    await page.locator('.dropdown-menu.show').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
