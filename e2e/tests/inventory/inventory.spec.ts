import { CartPage } from '@/page-objects/CartPage';
import { InventoryPage } from '@/page-objects/InventoryPage';
import { LoginPage } from '@/page-objects/LoginPage';
import { expect, test } from '@playwright/test';

test.describe('Inventory tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.goto();
  });

  test('Standard user can add item to cart', async () => {
    await loginPage.loginAsStandardUser();

    await inventoryPage.addFirstItemToCart();

    await inventoryPage.goToCart();

    expect(await cartPage.getCartCount()).toBe(1);
  });
});
