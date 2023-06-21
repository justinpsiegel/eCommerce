import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 21; i++) {
    cart[i] = 0;
  }
  return cart;
};

const localStorageCart = JSON.parse(localStorage.getItem("cart"));
console.log(localStorageCart);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(
    localStorageCart ? localStorageCart : getDefaultCart()
  );

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
