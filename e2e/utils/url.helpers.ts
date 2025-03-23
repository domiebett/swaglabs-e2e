import { Page } from 'playwright';
import { BaseUrl } from '@/data/urls';
import { expect } from 'playwright/test';

export async function expectUrlToBe(page: Page, url: string) {
  const currentPageUrl = page.url();
  const expectedUrl = `${BaseUrl}/${url}`;
  expect(currentPageUrl).toBe(expectedUrl);
}
