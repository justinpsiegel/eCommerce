import React, { useState, useEffect, useContext } from "react";
import { fetchProducts } from "../../products";
import Product from "../shop/Product";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
  const [data, setData] = useState(null);
  const { cartItems } = useContext(ShopContext);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {}
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="cart">
      <div>
        <h1>Cart</h1>
      </div>
      <div className="cartItems">
        {data?.map((product) => (
          <div>
            {cartItems[product.id] !== 0 ? <CartItem data={product} /> : <></>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
