import React from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="bg-[#F1F1F2]">
      <Header />
      <h1 className="h-[50px] place-content-center text-2xl sm:text-3xl md:text-4xl border-t-2 border-b-2 border-black px-2 sm:px-4 md:px-8 lg:px-20 font-semibold">
        Cart
      </h1>

      <div className="px-2 sm:px-4 md:px-8 lg:px-20 py-4 sm:py-6 md:py-8">
        {cart.length === 0 ? null : (
          <div className="flex justify-end">
            <button
              onClick={clearCart}
              className="text-red-500 font-semibold px-4 py-2 rounded hover:text-red-700"
            >
              Clear Cart
            </button>
          </div>
        )}
        <div className="space-y-4 sm:space-y-6">
          {cart.length === 0 ? (
            <div className="w-full flex flex-col justify-center items-center space-y-4">
              <span className="p-8 text-6xl bg-white rounded-full">
                <MdOutlineShoppingCart className="" />
              </span>
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <Link to="/product">
                <button className="px-6 py-2 bg-[#564E3B] text-white rounded">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            cart.map((item) => {
              const image = `/api/images/${item.photos[0]?.url || ""}`; // Adjust this line based on the structure of photos
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white min-h-[150px] sm:min-h-[150px] md:min-h-[150px] py-2 lg:h-[346px] px-2 sm:px-4"
                >
                  <img
                    src={image}
                    alt={item.name}
                    className="h-[90%] sm:h-[90%] md:h-[90%] object-cover w-[30%] xl:w-1/3"
                  />
                  <div className="flex-1 mx-2 sm:mx-4">
                    <h2 className="text-base sm:text-lg md:text-xl font-medium leading-tight">
                      {item.name}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base font-normal">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between w-full gap-2 sm:w-4/5 md:w-1/2 mt-2">
                      <div className="flex items-center text-lg space-x-4 lg:space-x-8 lg:text-2xl">
                        <button
                          className="text-[#333333]"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          {item.quantity === 1 ? <button disabled='true'>-</button> : <span>-</span>}
                        </button>
                        <span className="text-lg border px-2">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                      <p className="text-xs sm:text-base md:text-2xl text-[#6C0345] font-medium">
                        &#x20A6;{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 h-full text-xs md:text-lg"
                  >
                    Remove
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length === 0 ? null : (
          <>
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 flex justify-center">
              <div className="w-full md:w-2/3 xl:w-1/2">
                <h2 className="text-lg md:text-xl sm:text-xl font-medium mb-2 sm:mb-4">
                  Order Summary
                </h2>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>&#x20A6;{calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>5% Off</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span>&#x20A6;150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>N/A</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      &#x20A6;
                      {(calculateTotal() * 0.95 + 150000).toLocaleString()}
                    </span>
                  </div>
                </div>
                <Link to="/checkout">
                  <button className="mt-4 w-full bg-[#564E3B] text-white py-2 rounded-lg">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
