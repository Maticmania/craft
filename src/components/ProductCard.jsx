import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isInCart, addToCart }) => {
  const price = product.current_price[0]?.NGN[0] || 0;
  const image = `/api/images/${product.photos[0]?.url || ""}`;

  return (
    <div
      key={product.id}
      className="bg-white min-h-[380px] flex flex-col p-4 rounded-md justify-between"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={image}
          alt={product.name}
          className="h-[240px] w-full object-cover rounded-lg"
        />
      </Link>
      <Link to={`/product/${product.id}`}>
        <p className="text-center">
          {product.description || "No description available"}
        </p>
      </Link>
      <div className="flex justify-between items-center">
        <button
          className={`px-4 p-3 font-medium rounded ${
            isInCart ? "bg-gray-500 text-white" : "bg-[#564E3B] text-white"
          }`}
          onClick={() => addToCart({ ...product, price })}
          disabled={isInCart}
        >
          {isInCart ? "Added" : "Add to cart"}
        </button>
        <p className="font-medium text-2xl text-[#6C0345]">
          &#x20A6;{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
