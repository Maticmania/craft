import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import Checkout from "./pages/Checkout";
import Success from "./components/Success";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
