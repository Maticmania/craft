import React from "react";
import logo from "../assets/images/craft logo.png";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";


const Hero = () => {
  const funitures = [
    { name: "Living Room Furniture" },
    { name: "Dining Room Furniture" },
    { name: "Bedroom Furniture" },
    { name: "Office Furniture" },
    { name: "Outdoor Furniture" },
  ];

  return (
    <div className="hero-bg h-[100vh] md:h-[850px]" id="#">
      <div className="content px-4 sm:px-8 md:px-16 lg:px-20 pt-12 sm:pt-14 md:pt-14 pb-10 sm:pb-16 md:pb-28 flex flex-col justify-between h-full">
        <header className="content-menu flex justify-between items-center">
          <div className="logo flex h-full items-center">
            <img src={logo} className="h-[60px] sm:h-[80px] md:h-[100px]" />
            <p className="text-logo">Craft</p>
          </div>
          <div className="hidden xl:block">
            <ul className="flex space-x-4 sm:space-x-6 font-light">
              <li><a href="#">Home</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#product">Shop</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="w-[100px] sm:w-[150px] md:w-[180px] px-2 sm:px-4 py-1 sm:py-[6px] rounded bg-white/50 text-white hidden xl:block"
            />
            <div className="flex backdrop-blur-lg bg-white/50 px-2 sm:px-4 py-1 sm:py-2 rounded">
              <span className="mr-2 sm:mr-4 relative">
                <a href="/cart">
                <MdOutlineShoppingCart className="text-lg sm:text-xl" />
                <span className=" absolute -top-1 -right-1 text-red-500">
                  <GoDotFill/>
                </span>
                </a>
              </span>
              <span>
                <FaUserAlt className="text-lg sm:text-xl hidden xl:block" />
                <IoMenu className="text-lg sm:text-xl xl:hidden block"/>
              </span>
            </div>
          </div>
        </header>
        <div className="content space-y-2 sm:space-y-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            CRAFTED FOR COMFORT, DESIGNED FOR LIFE
          </h3>
          <p className="font-light text-sm sm:text-base md:text-lg">
            Experience the perfect harmony of craftsmanship and modern design.
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="p-2 sm:p-3 px-3 sm:px-4 bg-[#564E3B] text-white font-medium rounded">
              All Furniture
            </button>
            {funitures.map((f, i) => (
              <button
                key={i}
                className="p-2 sm:p-3 hidden sm:block bg-white text-[#564E3B] font-medium rounded"
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
