export const isValidProductData = (product) => {
  const isEmpty = Object.values(product).some(x => x == null || x == '');
  return !isEmpty
}