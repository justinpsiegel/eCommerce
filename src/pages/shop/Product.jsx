import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, description, category, image, rating } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product flex flex-col">
      <Link to={`/${id}`}>
        <img
          className="border-solid border-8 border-black rounded p-8 bg-white"
          src={image}
        />
        <div className="description hover:text-[blue] transition-all">
          <p>
            <b>{title}</b>
          </p>
          <p>${price}</p>
        </div>
      </Link>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
      {localStorage.setItem("cart", JSON.stringify(cartItems))}
    </div>
  );
};

export default Product;
