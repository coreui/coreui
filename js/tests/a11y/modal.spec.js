import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Modal', () => {
  test('shown modal has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/modal.html')

    await page.click('[data-coreui-toggle="modal"]')
    await page.locator('.modal.show').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
