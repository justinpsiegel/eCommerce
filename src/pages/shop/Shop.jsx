import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../products";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {}
    };

    fetchDataAsync();
  }, []);

  console.log(data);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop of The Gull</h1>
      </div>
      <div className="products">
        {data?.map((product) => (
          <div>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
