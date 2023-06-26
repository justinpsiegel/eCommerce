import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../products";
import { ShopContext } from "../context/ShopContext";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchSingleProduct(productId);
        setProduct(fetchedData);
      } catch (error) {}
    };

    fetchDataAsync();
  }, []);

  const cartItemAmount = cartItems[product?.id];

  return (
    <div className="product">
      <img src={product?.image} />
      <div className="description">
        <p>
          <b>{product?.title}</b>
        </p>
        <p>${product?.price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(product?.id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
      {localStorage.setItem("cart", JSON.stringify(cartItems))}
    </div>
  );
};

export default SingleProduct;
