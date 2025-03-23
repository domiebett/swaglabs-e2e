import { defineConfig, devices } from '@playwright/test';
import { baseUrl } from './e2e/data/urls';

import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './e2e/tests',
  timeout: 30 * 1000,
  globalSetup: require.resolve('./e2e/global-setup.ts'),
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 0,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: baseUrl,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: 'e2e/test-results/',
});
