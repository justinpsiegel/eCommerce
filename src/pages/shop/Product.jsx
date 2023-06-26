import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, description, category, image, rating } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <Link to={`/${id}`}>
        <img src={image} />
        <div className="description">
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
