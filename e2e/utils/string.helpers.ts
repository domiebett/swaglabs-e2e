export const stringsAreSorted = (
  strings: string[],
  descending: boolean
): boolean => {
  for (let i = 0; i < strings.length - 1; i++) {
    const comparison = strings[i].localeCompare(strings[i + 1]);
    if (descending ? comparison < 0 : comparison > 0) {
      return false;
    }
  }
  return true;
};
