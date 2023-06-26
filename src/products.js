export const fetchProducts = async () => {
  const PRODUCTS = `https://fakestoreapi.com/products/`;
  const data = await (await fetch(PRODUCTS)).json();
  return data;
};

export const fetchSingleProduct = async (productId) => {
  const SINGLEPRODUCT = `https://fakestoreapi.com/products/${productId}`;
  const data = await (await fetch(SINGLEPRODUCT)).json();
  return data;
};
