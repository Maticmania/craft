import React from "react";
import { useCart } from "../context/CartContext";
import data from "../db/Productdb";
import Header from "./Header";
import Product from "../pages/Product";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <Product />
    </div>
  );
};

export default ProductPage;