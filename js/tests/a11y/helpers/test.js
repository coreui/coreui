import { test as base } from '@playwright/test'

const DISABLE_MOTION = `
*, *::before, *::after {
  transition: none !important;
  animation: none !important;
  transition-delay: 0s !important;
  animation-delay: 0s !important;
  scroll-behavior: auto !important;
}
`

export const test = base.extend({
  async page({ page }, use) {
    await page.addInitScript(motion => {
      const style = document.createElement('style')
      style.textContent = motion
      document.addEventListener('DOMContentLoaded', () => document.head.append(style))
    }, DISABLE_MOTION)
    await use(page)
  }
})

export { analyzeA11y, expectNoViolations } from './axe.js'
