import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly cartItemNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.cartItemNames = page.locator('[data-test="inventory-item-name"]');
  }

  async getCartCount() {
    return this.cartItems.count();
  }

  async getCartItemName(itemIndex: number) {
    return this.cartItemNames.nth(itemIndex).textContent();
  }
}
