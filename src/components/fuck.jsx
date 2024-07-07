import React from "react";
import Header from "../components/Header";
import { FaCreditCard } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoLogoPaypal } from "react-icons/io5";

const Checkout = () => {
  return (
    <>
      <div className="container mx-auto bg-[#F1F1F2]">
        <Header />
        <div className="w-full flex justify-center py-8">
          <div className="flex flex-col lg:flex-row justify-around items-start p-3 lg:p-8 w-[80%]">
            <div className="w-full lg:w-1/2 p-3 lg:p-8 border-r-2 border-[#564E3B]">
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <div className="flex gap-3 mb-4  xl:flex-row flex-col">
                <input
                  type="email"
                  className="p-3 rounded"
                  placeholder="Email"
                />
                <input
                  type="number"
                  className="p-3 rounded"
                  placeholder="Phone number"
                />
              </div>
              <h2 className="text-lg font-semibold mb-4">
                Shipping Information
              </h2>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="p-3 rounded"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="p-3 rounded"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col mb-2">
                <select className="p-3 rounded w-[215px] text-gray-400">
                  <option>Country</option>
                </select>
              </div>
              <div className="flex flex-col mb-2">
                <select className="p-3 rounded w-[215px] text-gray-400">
                  <option>State</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="flex flex-col mb-2">
                <input
                  type="text"
                  className="p-3 rounded w-[215px]"
                  placeholder="City"
                />
              </div>
              <div className="flex flex-col mb-2">
                <input
                  type="text"
                  className="p-3 rounded w-[215px]"
                  placeholder="Postal Code"
                />
              </div>
              <div className="flex flex-col mb-2">
                <input
                  type="text"
                  className="p-3 rounded"
                  placeholder="Street Address"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-3 lg:p-8">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="flex mb-2 space-x-4">
                <p className="px-2 rounded-lg bg-[#564E3B] text-white flex items-center gap-1">
                  Credit card <FaCreditCard />{" "}
                </p>
                <button className="p-4 rounded-lg bg-white flex items-center gap-1">
                  PayPal <IoLogoPaypal />
                </button>
                <button className="p-4 rounded-lg bg-white flex items-center gap-1">
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
              <div className="flex gap-4 mb-4 w-full">
                <div className="flex flex-col">
                  <label className="mb-2">Expiry date</label>
                  <input
                    type="text"
                    className="p-3 rounded"
                    placeholder="xx/xx"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2">CVV</label>
                  <input
                    type="text"
                    className="p-3 rounded"
                    placeholder="xxx"
                  />
                </div>
              </div>
              <button className="p-3 bg-[#6C584C] text-white rounded w-full">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
