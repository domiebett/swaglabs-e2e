import { pricesAreSorted } from '@/utils/price.helper';
import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly inventoryItemName: Locator;
  readonly addToCartButton: Locator;
  readonly goToCartButton: Locator;
  readonly productSortContainer: Locator;
  readonly inventoryItemPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]');
    this.goToCartButton = page.locator('[data-test="shopping-cart-link"]');

    this.productSortContainer = page.locator(
      '[data-test="product-sort-container"]'
    );
    this.inventoryItemPrices = page.locator(
      '[data-test="inventory-item-price"]'
    );
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

  async sortProductsByPrice(descending: boolean) {
    const label = descending ? 'Price (high to low)' : 'Price (low to high)';

    await this.productSortContainer.selectOption({ label });
  }

  async productsAreSortedByPrice(descending: boolean) {
    const prices = await this.inventoryItemPrices.allTextContents();
    return pricesAreSorted(prices, descending);
  }
}
