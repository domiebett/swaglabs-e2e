import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly inventoryItems: Locator;
  readonly inventoryItemName: Locator;
  readonly inventoryItemPrice: Locator;
  readonly addToCartButton: Locator;
  readonly goToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.inventoryItemPrice = page.locator(
      '[data-test="inventory-item-price"]'
    );
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]');
    this.goToCartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async getInventoryCount() {
    return this.inventoryItems.count();
  }

  async getInventoryItemName(itemIndex: number) {
    return this.inventoryItemName.nth(itemIndex).textContent();
  }

  async addItemToCart(itemIndex: number) {
    await this.addToCartButton.nth(itemIndex).click();
  }

  async goToCart() {
    await this.goToCartButton.click();
  }
}
