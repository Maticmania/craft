import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../assets/images/craft logo.png";

const Header = () => {
  return (
    <header className="bg-[#333333] text-white py-4 px-4">
      <div className="flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-[60px] sm:h-[80px] md:h-[100px]" />
          <p className="text-logo">Craft</p>
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/" className="hover:text-gray-400">
            Contact Us
          </a>
          <a href="/" className="hover:text-gray-400">
            Shop
          </a>
          <a href="/" className="hover:text-gray-400">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-2  bg-white/20 rounded">
          <div className="flex items-center p-2 rounded-md">
            <a href="/cart">
              <MdOutlineShoppingCart className="text-xl" />
            </a>
          </div>
          <div className="flex items-center p-2 rounded-md">
            <FaUserAlt className="text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
