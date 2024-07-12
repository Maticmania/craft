import React from "react";
import Header from "../components/Header";
import { FaCreditCard } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoLogoPaypal } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <>
        <div className="bg-[#F1F1F2]">
          <Header />
          <div className="w-full flex justify-center py-8">
            <div className="flex flex-col lg:flex-row justify-around items-start p-3 lg:p-8 w-[90%] lg:w-[80%]">
              <div className="w-full lg:w-1/2 p-3 lg:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#564E3B]">
                <h2 className="text-lg font-semibold mb-4">Contact</h2>
                <div className="flex gap-3 mb-4">
                  <input
                    type="email"
                    className="p-3 rounded w-1/2"
                    placeholder="Email"
                  />
                  <input
                    type="number"
                    className="p-3 rounded w-1/2"
                    placeholder="Phone number"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-4">
                  Shipping Information
                </h2>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    className="p-3 rounded w-1/2"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="p-3 rounded w-1/2"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <select className="p-3 rounded text-gray-400 w-1/2">
                    <option>Country</option>
                  </select>
                  <select className="p-3 rounded text-gray-400 w-1/2">
                    <option>State</option>
                    {/* Add more options here */}
                  </select>
                  <input
                    type="text"
                    className="p-3 rounded w-1/2"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    className="p-3 rounded w-1/2"
                    placeholder="Postal Code"
                  />
                  <input
                    type="text"
                    className="p-3 rounded w-full"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-3 lg:p-8">
                <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button className="px-4 py-2 rounded-lg bg-[#564E3B] text-white flex items-center gap-1">
                    Credit Card <FaCreditCard />
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-white flex items-center gap-1 border">
                    PayPal <IoLogoPaypal />
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-white flex items-center gap-1 border">
                    Bank Transfer <FaArrowsRotate />
                  </button>
                </div>
                <div className="flex flex-col mb-2">
                  <label className="mb-2">Card number</label>
                  <input
                    type="text"
                    className="p-3 rounded"
                    placeholder="xxxx xxxx xxxx xxxx"
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label className="mb-2">Card name</label>
                  <input
                    type="text"
                    className="p-3 rounded"
                    placeholder="Holder's Name"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-4 lg:flex-row lg:gap-4 w-full">
                  <div className="flex flex-col w-full lg:w-1/2">
                    <label className="mb-2">Expiry date</label>
                    <input
                      type="text"
                      className="p-3 rounded"
                      placeholder="xx/xx"
                    />
                  </div>
                  <div className="flex flex-col w-full lg:w-1/2">
                    <label className="mb-2">CVV</label>
                    <input
                      type="text"
                      className="p-3 rounded"
                      placeholder="xxx"
                    />
                  </div>
                </div>
                <a href="/success">
                  <button
                    // onClick={clearCart}
                    className="p-3 bg-[#6C584C] text-white rounded w-full"
                  >
                    Make Payment
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Checkout;
