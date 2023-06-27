import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const CartItem = (props, { setTotalAmount }) => {
  const { id, title, price, description, category, image, rating } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    deleteFromCart,
  } = useContext(ShopContext);

  return (
    <div className="cartItem bg-white">
      <Link to={`/${id}`}>
        <img className="ml-8" src={image} />
      </Link>
      <div className="description ml-8">
        <p>
          <b className="m-4">{title}</b>
        </p>
        <p className="m-4">${price.toFixed(2)}</p>
        <div className="countHandler m-4">
          <button
            onClick={() => removeFromCart(id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            -
          </button>
          <input
            onChange={(e) => updateCartItemCount(parseInt(e.target.value), id)}
            className="m-2 shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={cartItems[id]}
          />
          <button
            onClick={() => addToCart(id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-24"
            onClick={() => deleteFromCart(id)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
      {localStorage.setItem("cart", JSON.stringify(cartItems))}
    </div>
  );
};

export default CartItem;
