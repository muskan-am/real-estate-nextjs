"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/common/ProductCard";

const Product = () => {
  const [product, setProduct] = useState([]);

  const getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl py-10 text-center">Products</h1>

      <div className="max-w-[1320px] mx-auto mt-10">
        <div className="grid grid-cols-4 gap-4">
          {product.map((obj) => (
            <ProductCard key={obj.id} data={obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;