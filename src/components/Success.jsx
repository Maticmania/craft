import React, { useEffect } from "react";
import Header from "./Header";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Success = () => {
  const { dispatch } = useCart();
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="bg-[#F1F1F2] min-h-screen">
      <Header />
      <div className="flex justify-center">
        <div className="bg-white p-8 mt-8  w-[90%] md:w-[60%] lg:w-[40%]">
          <h1 className="text-2xl font-semibold text-center mb-2">
            Payment Successful
          </h1>
          <p className="text-center mb-6">Thank you for your purchase</p>
          <div className="flex justify-center mb-6">
            <FaCheckCircle className="text-green-500 text-6xl" />
          </div>
          <div className="flex justify-center">
            <div className="text-left mb-6">
              <p>
                Order Number: <span className="font-semibold">#1164937637</span>
              </p>
              <p>
                Order Date: <span className="font-semibold">05-07-2024</span>
              </p>
              <p>
                Name: <span className="font-semibold">Guy Hawkins</span>
              </p>
              <p>
                Address:
                <span className="font-semibold">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </span>
              </p>
              <p>
                Email:
                <span className="font-semibold">guy.hawkins@example.com</span>
              </p>
              <p>
                Phone: <span className="font-semibold">(307) 555-0133</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <Link to="/product">
              <button
                onClick={clearCart}
                className="px-6 py-2 bg-[#564E3B] text-white rounded"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1">Need help?</p>
            <p className="text-sm">
              If you have any questions about your order, please contact our
              customer support team at:
            </p>
            <p className="text-sm"> (808) 555-0111 Craft@service.net</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
