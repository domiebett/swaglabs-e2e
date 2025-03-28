import { test } from '@playwright/test';
import { InventoryUrl } from '@/data/urls';
import { LoginPage } from '@/page-objects/LoginPage';
import { expectUrlToBe } from '@/utils/url.helpers';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Standard user can login', { tag: '@smoke' }, async ({ page }) => {
    await loginPage.loginAsStandardUser();

    await expectUrlToBe(page, InventoryUrl);
  });
});
