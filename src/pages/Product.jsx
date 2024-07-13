import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Product = () => {
  const { state, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Appid = import.meta.env.VITE_REACT_APP_APPID;
  const Apikey = import.meta.env.VITE_REACT_APP_APIKEY;
  const organId = import.meta.env.VITE_REACT_APP_ORGANIZATIONID;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `/api/products?organization_id=${organId}&Appid=${Appid}&Apikey=${Apikey}`,
          {
            mode: "cors",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [Appid, Apikey, organId]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => {
            const isInCart = state.cart.some(item => item.id === product.id);
            const price = product.current_price[0]?.NGN[0] || 0;
            const image = `/api/images/${product.photos[0]?.url || ''}`;

            return (
              <div
                key={product.id}
                className="bg-white h-[380px] flex flex-col p-4 rounded-md justify-between"
              >
                 <Link to={`/product/${product.id}`}>
                  <img
                    src={image}
                    alt={product.name}
                    className="h-[240px] w-full object-cover rounded-lg"
                  />
                </Link>
                <Link to={`/product/${product.id}`}>
                  <p className="text-center">{product.description || 'No description available'}</p>
                </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Product;
