import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..')

export default defineConfig({
  testDir: '.',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3000',
    reducedMotion: 'reduce',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
  webServer: {
    command: `sirv ${rootDir} --port 3000 --dev --quiet`,
    port: 3000,
    reuseExistingServer: !process.env.CI
  }
})
