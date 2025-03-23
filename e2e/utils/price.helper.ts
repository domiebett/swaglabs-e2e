export function pricesAreSorted(prices: string[], descending: boolean) {
  const numericPrices = prices.map((price) =>
    Number(price.replace(/[^0-9.]/g, ''))
  );

  return numbersAreSorted(numericPrices, descending);
}

export function numbersAreSorted(numbers: number[], descending: boolean) {
  const compareFn = (a: number, b: number) => (descending ? a >= b : b >= a);

  for (let i = 0; i < numbers.length - 1; i++) {
    const areSorted = compareFn(numbers[i], numbers[i + 1]);
    if (!areSorted) return false;
  }

  return true;
}
