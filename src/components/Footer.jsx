import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-footer" id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 content space-y-12">
            <h2 className="text-logo w-1/4 text-center">Craft</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-28 text-white w-full">
            <div>
            <ul className="space-y-2">
              <li>Shop</li>
              <li>Delivery & Returns</li>
              <li>Wholesale</li>
              <li>Sustainability</li>
              <li>About</li>
              <li>Why choose us</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>(808) 555-0111</p>
            <p>Craft@service.net</p>
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Socials</h2>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>X (Twitter)</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Tiktok</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 text-lg flex flex-col md:flex-row justify-between">
          <p>©2024 - South Dakota. US All rights reserved.</p>
          <p><a href="#" className="underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
