import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, title, price, description, category, image, rating } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button
            onClick={() => removeFromCart(id)}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            -
          </button>
          <input
            onChange={(e) => updateCartItemCount(parseInt(e.target.value), id)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={cartItems[id]}
          />
          <button
            onClick={() => addToCart(id)}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            +
          </button>
        </div>
      </div>
      {localStorage.setItem("cart", JSON.stringify(cartItems))}
    </div>
  );
};

export default CartItem;
