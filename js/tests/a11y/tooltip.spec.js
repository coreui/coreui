import { test, analyzeA11y, expectNoViolations } from './helpers/test.js'

test.describe('Tooltip', () => {
  // Known issue (tracked): the default tooltip applies `--cui-tooltip-opacity: 0.9`
  // to the whole element, compositing the dark background with the page to a grey
  // that drops text contrast to 3.5:1 (WCAG 2.2 AA requires 4.5:1). Re-enable once
  // the opacity moves onto the background colour.
  test.fixme('shown tooltip has no accessibility violations', async ({ page }) => {
    await page.goto('/js/tests/a11y/fixtures/tooltip.html')

    await page.hover('[data-coreui-toggle="tooltip"]')
    await page.locator('.tooltip').waitFor({ state: 'visible' })

    expectNoViolations(await analyzeA11y(page))
  })
})
