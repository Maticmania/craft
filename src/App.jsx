import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import Checkout from "./pages/Checkout";
import Success from "./components/Success";
import ProductPage from "./components/ProductPage";
import { useCart } from "./context/CartContext";

function App() {
  const {
    state: { cart },
  } = useCart();

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/checkout"
            element={
              cart.length > 0 ? <Checkout /> : <Navigate to="/cart" replace />
            }
          />
          <Route
            path="/success"
            element={
              cart.length > 0 ? <Success /> : <Navigate to="/product" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
