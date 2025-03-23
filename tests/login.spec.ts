import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryUrl } from '../data/urls';
import { expectUrlToBe } from '../utils/url.helpers';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Standard user can login', async ({ page }) => {
    await loginPage.loginAsStandardUser();
    
    await expectUrlToBe(page, InventoryUrl);
  });
});
