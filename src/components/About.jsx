import React from "react";
import aboutimg from "../assets/images/aboutpage.jpeg";

const About = () => {
  return (
    <>
      <div
        className="flex px-4 sm:px-8 md:px-16 lg:px-20 py-8 items-center gap-4 flex-col-reverse xl:flex-row"
        id="about"
      >
        <div className="text-center xl:w-1/2">
          <h1 className="font-bold text-3xl">About Us</h1>
          <p className="xl:text-left text-center">
            We at Craft believe that your home should represent who you are.
            We're committed to giving you fashionable, high-quality furniture so
            you can design rooms you'll love. Our carefully chosen collections
            are meant to uplift and make your living spaces cosy, useful, and
            visually stunning.
          </p>
        </div>
        <img src={aboutimg} alt="about page image" className="xl:w-1/2" />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8 text-center space-y-2">
        <h1 className="text-lg xl:text-[32px] font-medium ">
          Discover the Latest in Home Furnishings
        </h1>
        <div className="space-x-1">
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 p-3 w-1/2 xl:w-1/4 border-[#564E3B] text-[#564E3B]"
          />
          <button className="text-white bg-[#564E3B] border-2 border-[#564E3B] p-3">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
