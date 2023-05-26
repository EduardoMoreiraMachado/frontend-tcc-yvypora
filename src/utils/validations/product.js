export const isValidProductData = (product) => {
  console.log(product)
  const isEmpty = Object.values(product).some(x => x !== null || x !== '');
  return !isEmpty
}