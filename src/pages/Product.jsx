import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { state, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products", {
          params: {
            organization_id: '4fafd488408b4f84b93e7fcdfe67a60c',
            reverse_sort: false,
            page: 1,
            size: 10,
            Appid: "0R9IWWN8EN6MGTO",
            Apikey: "6e4f95a94e32403caaa6db8d45e5dbb520240712143047980526",
          },
        });
        setProducts(response.data.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <div className="py-8 bg-[#F1F1F2]" id="product">
      <h1 className="h-[50px] place-content-center text-center border-t-2 border-b-2 border-black text-xl">
        Our Product
      </h1>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => {
            const isInCart = state.cart.some(item => item.id === product.id);
            const price = product.current_price[0]?.NGN[0] || 0; // Adjust this line based on the structure of current_price
            const image = `/api/images/${product.photos[0]?.url || ''}`; // Adjust this line based on the structure of photos

            return (
              <div
                key={product.id}
                className="bg-white h-[380px] flex flex-col p-4 rounded-md justify-between"
              >
                <img
                  src={image}
                  alt={product.name}
                  className="h-[240px] w-full object-cover rounded-lg"
                />
                <p className="text-center">{product.description || 'No description available'}</p>
                <div className="flex justify-between items-center">
                  <button
                    className={`px-4 p-3 font-medium rounded ${isInCart ? 'bg-gray-500 text-white' : 'bg-[#564E3B] text-white'}`}
                    onClick={() => addToCart({ ...product, price })}
                    disabled={isInCart}
                  >
                    {isInCart ? 'Added' : 'Add to cart'}
                  </button>
                  <p className="font-medium text-2xl text-[#6C0345]">
                    &#x20A6;{price.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Product;
