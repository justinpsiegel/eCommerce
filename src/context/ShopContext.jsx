import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContext = (props) => {
  const [cartItems, setCartItems] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {}
    };

    fetchDataAsync();
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};

export default ShopContext;
