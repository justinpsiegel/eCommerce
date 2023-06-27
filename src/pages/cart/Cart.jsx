import React, { useState, useEffect, useContext } from "react";
import { fetchProducts } from "../../products";
import Product from "../shop/Product";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./cart.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState(null);
  const { cartItems, getTotalCartAmount, checkoutCart } =
    useContext(ShopContext);

  const [totalAmount, setTotalAmount] = useState(getTotalCartAmount);

  let cartIsEmpty = true;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      cartIsEmpty = false;
    }
  }

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
                  <CartItem data={product} setTotalAmount={setTotalAmount} />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          {!cartIsEmpty ? (
            <div className="checkout">
              {/* <p>Subtotal: ${totalAmount.toFixed(2)}</p> */}
              <button
                className="hover:bg-[#6495ED] transition-all"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <Link to="/">
                <button
                  onClick={() => checkoutCart()}
                  className="hover:bg-[#6495ED] transition-all"
                >
                  Checkout
                </button>
              </Link>
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
