export const fetchProducts = async () => {
  const PRODUCTS = `https://fakestoreapi.com/products/`;
  const data = await (await fetch(PRODUCTS)).json();
  return data;
};

fetchProducts();
