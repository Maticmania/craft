import React from "react";
import data from "../db/Productdb";

const Product = () => {
  return (
    <div className="py-8 bg-[#F1F1F2]" id="product">
      <h1 className="h-[50px] place-content-center text-center border-t-2 border-b-2 border-black text-xl">
        Our Product
      </h1>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((product, i) => (
            <div
              key={product.id}
              className="bg-white h-[380px] flex flex-col p-4 rounded-md justify-between"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[240px] w-full object-cover rounded-lg"
              />
              <p className="text-center">{product.desc}</p>
              <div className="flex justify-between items-center">
                <button
                  className='bg-[#564E3B] text-white px-4 p-3 font-medium rounded'
                >
                  Add to cart
                </button>
                <p className="font-medium text-2xl text-[#6C0345]">
                  &#x20A6;{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
