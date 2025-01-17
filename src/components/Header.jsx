import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/images/craft logo.png";
import { GoDotFill } from "react-icons/go";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    state: { cart },
  } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#333333] text-white py-4 px-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-[60px] sm:h-[80px] md:h-[100px]" />
          <p className="text-logo">Craft</p>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-400">
            Contact Us
          </Link>
          <Link to="/product" className="hover:text-gray-400">
            Shop
          </Link>
          <Link to="/" className="hover:text-gray-400">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-2 bg-white/20 rounded">
          <div className="flex items-center p-2 rounded-md relative">
            <Link to="/cart">
              <MdOutlineShoppingCart className="text-2xl sm:text-2xl" />
              <span className="absolute top-1 right-1 text-red-500">
                {cart.length === 0 ? null : <GoDotFill />}
              </span>
            </Link>
          </div>
          <div className="flex items-center p-2 rounded-md">
            <FaUserAlt className="text-xl" />
          </div>
          <button
            className="text-3xl md:hidden block"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white text-black p-4 rounded shadow-md mt-2">
          <ul className="flex flex-col space-y-2 font-light">
            <li>
              <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-gray-400" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
