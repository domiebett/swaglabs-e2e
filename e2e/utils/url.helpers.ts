import { Page } from 'playwright';
import { baseUrl } from '@/data/urls';
import { expect } from 'playwright/test';

export async function expectUrlToBe(page: Page, url: string) {
  const currentPageUrl = page.url();
  const expectedUrl = `${baseUrl}${url}`;
  expect(currentPageUrl).toBe(expectedUrl);
}
