import { CartPage } from '@/page-objects/CartPage';
import { InventoryPage } from '@/page-objects/InventoryPage';
import { LoginPage } from '@/page-objects/LoginPage';
import { expect, test } from '@playwright/test';

const DEFAULT_INVENTORY_COUNT = 6;

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

  test('Inventory has 6 items', { tag: '@smoke' }, async () => {
    await loginPage.loginAsStandardUser();

    expect(await inventoryPage.getInventoryCount()).toBe(
      DEFAULT_INVENTORY_COUNT
    );
  });

  test('Standard user can add item to cart', { tag: '@smoke' }, async () => {
    await loginPage.loginAsStandardUser();

    const itemIndex = 0;

    const itemName = await inventoryPage.getInventoryItemName(itemIndex);

    await inventoryPage.addItemToCart(itemIndex);

    await inventoryPage.goToCart();

    expect(await cartPage.getCartCount()).toBe(1);
    expect(await cartPage.getCartItemName(itemIndex)).toBe(itemName);
  });

  test('Standard user can sort products by price', async () => {
    await loginPage.loginAsStandardUser();

    await inventoryPage.sortProductsByPrice(true);

    expect(await inventoryPage.productsAreSortedByPrice(true)).toBe(true);
  });

  test('Standard user can sort products by name', async () => {
    await loginPage.loginAsStandardUser();

    await inventoryPage.sortProductsByName(true);

    expect(await inventoryPage.productsAreSortedByName(true)).toBe(true);
  });
});
