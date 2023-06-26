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

  return (
    <div className="shop">
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
