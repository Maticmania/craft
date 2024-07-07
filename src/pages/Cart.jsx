import React from "react";
import data from "../db/Productdb";
import Header from "../components/Header";

const Cart = () => {
  const cartItems = data.slice(4, 8);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div className="bg-[#F1F1F2]">
      <Header />
      <h1 className="h-[50px] place-content-center text-2xl sm:text-3xl md:text-4xl border-t-2 border-b-2 border-black px-2 sm:px-4 md:px-8 lg:px-20 font-semibold">
        Cart
      </h1>
      <div className="px-2 sm:px-4 md:px-8 lg:px-20 py-4 sm:py-6 md:py-8">
        <div className="space-y-4 sm:space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white min-h-[150px] sm:min-h-[150px] md:min-h-[150px] py-2 lg:h-[346px] px-2 sm:px-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[90%] sm:h-[90%] md:h-[90%] object-cover w-[30%] xl:w-1/3"
              />
              <div className="flex-1 mx-2 sm:mx-4">
                <h2 className="text-base sm:text-lg md:text-xl font-medium leading-tight">{item.name}</h2>
                <p className="text-xs sm:text-sm md:text-base font-normal">{item.desc}</p>
                <div className="flex items-center justify-between w-full gap-2 sm:w-4/5 md:w-1/2 mt-2">
                  <select name="quantity" id="quantity" className="border-2 border-black p-0 py-1 sm:p-2 md:p-4 font-medium rounded">
                    <option value='1'>Quantity 1</option>
                    <option value='2'>Quantity 2</option>
                    <option value='3'>Quantity 3</option>
                    <option value='4'>Quantity 4</option>
                  </select>
                  <p className="text-xs sm:text-base md:text-2xl text-[#6C0345] font-medium">
                    &#x20A6;{item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700 h-full text-xs md:text-lg">Remove</button>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 flex justify-center">
        <div className="w-full md:w-2/3 xl:w-1/2">
        <h2 className="text-lg md:text-xl sm:text-xl font-medium mb-2 sm:mb-4">Order Summary</h2>
          <div className="space-y-1 sm:space-y-2">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>&#x20A6;{calculateTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>5% Off</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span>&#x20A6;150,000</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>N/A</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>
                &#x20A6;{(calculateTotal() * 0.95 + 150000).toLocaleString()}
              </span>
            </div>
          </div>
          <a href="/checkout">
          <button className="mt-4 w-full bg-[#564E3B] text-white py-2 rounded-lg">
            Proceed to Checkout
          </button>
          </a>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
