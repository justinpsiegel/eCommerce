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
    <div>
      {product ? (
        <div>
          <h2 className="m-8 my-24 text-4xl">{product.title}</h2>
          <div className="singleProduct flex">
            <img
              className="border-solid border-8 border-black rounded p-8 bg-white h-[500px]"
              src={product.image}
            />
            <div className="flex flex-col m-4 w-screen">
              <div className="description">
                <p className="text-2xl my-8 w-[1000px]">
                  {product.description}
                </p>
                <p className="text-xl my-8">
                  <b>Price:</b> ${product.price.toFixed(2)}
                </p>
                <p className="text-xl my-8">
                  <b>Category: </b>
                  {product.category}
                </p>
                <p className="text-xl my-8">
                  <b>Rating:</b> {product.rating.rate}/5 ({product.rating.count}{" "}
                  Customer Reviews)
                </p>
              </div>
              <button
                className="addToCartBttn my-8 w-[150px]"
                onClick={() => addToCart(product.id)}
              >
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>
            {localStorage.setItem("cart", JSON.stringify(cartItems))}
          </div>
        </div>
      ) : (
        <div>Fetching Product...</div>
      )}
    </div>
  );
};

export default SingleProduct;
