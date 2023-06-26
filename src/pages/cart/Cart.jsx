import React, { useState, useEffect, useContext } from "react";
import { fetchProducts } from "../../products";
import Product from "../shop/Product";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./cart.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState(null);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {}
    };

    fetchDataAsync();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="text-5xl my-8">Cart</h1>
      </div>
      {data ? (
        <div className="cart">
          <div className="cartItems">
            {data?.map((product) => (
              <div>
                {cartItems[product.id] !== 0 ? (
                  <CartItem data={product} />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          {getTotalCartAmount > 0 ? (
            <div className="checkout">
              <p>Subtotal: ${getTotalCartAmount}</p>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button>Checkout</button>
            </div>
          ) : (
            <div>Your Cart is empty</div>
          )}
        </div>
      ) : (
        <div>Fetching Your Cart...</div>
      )}
      {localStorage.setItem("cart", JSON.stringify(cartItems))}
    </div>
  );
};

export default Cart;
