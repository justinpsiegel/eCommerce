import React from "react";

const CartItem = (props) => {
  const { id, title, price, description, category, image, rating } = props.data;

  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
