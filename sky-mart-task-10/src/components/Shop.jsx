import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Shop = () => {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProductsData(res.data.products);
      console.log(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    // Example API array mapping
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {productsData.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Shop;
