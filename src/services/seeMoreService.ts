export const getNumberOfAllowedItems = (
  itemsContainerWidth: number | undefined,
  itemWidth: number
): number => {
  if (!itemsContainerWidth) {
    return 0;
  }
  return Math.floor(itemsContainerWidth / itemWidth);
};

export const souldShowMoreButton = (
  numberOfAllowedItems: number,
  itemsLength: number,
  seeMoreURL?: string
): boolean => {
  if (!seeMoreURL) {
    return false;
  }
  return itemsLength > numberOfAllowedItems;
};
