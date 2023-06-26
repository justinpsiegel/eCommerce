import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 21; i++) {
    cart[i] = 0;
  }
  return cart;
};

const localStorageCart = JSON.parse(localStorage.getItem("cart"));

const ShopContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [getTotalCartAmount, setGetTotalCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState(
    localStorageCart ? localStorageCart : getDefaultCart()
  );

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {}
    };

    fetchDataAsync();

    const getTotalCartAmount = async () => {
      const fetchedData = await fetchProducts();
      let totalAmount = 0;
      for (const item in cartItems) {
        if ((await cartItems[item]) > 0) {
          let itemInfo = fetchedData?.find(
            (product) => product.id === Number(item)
          );
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      setGetTotalCartAmount(totalAmount);
    };
    getTotalCartAmount();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
