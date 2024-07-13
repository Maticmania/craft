import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import { GoDotFill } from "react-icons/go";
import Product from "../pages/Product";


const ProductDetail = () => {
  const { productId } = useParams();
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Appid = import.meta.env.VITE_REACT_APP_APPID;
  const Apikey = import.meta.env.VITE_REACT_APP_APIKEY;
  const organId = import.meta.env.VITE_REACT_APP_ORGANIZATIONID;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `/api/products/${productId}?organization_id=${organId}&Appid=${Appid}&Apikey=${Apikey}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading product: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const price = product.current_price[0]?.NGN[0] || product.current_price; // Adjust this line based on the structure of current_price
  const isInCart = state.cart.some(item => item.id === product.id);

  console.log(product);
  return (
    <>
      <Header />
      <div id="product-detail">
        <div className="px-4 sm:px-8 xl:px-16 lg:px-20 py-8">
          <div className="w-full min-h-[330px] p-4 rounded-md flex  flex-col xl:flex-row xl:justify-around">
            <div className="w-full xl:w-2/5 p-4 xl:border-gray-400 border-3 border rounded bg-white">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                    slidesToSlide: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    slidesToSlide: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                    slidesToSlide: 1,
                  },
                }}
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {product.photos.slice(0, 3).map((photo, index) => (
                  <img
                    key={index}
                    src={`/api/images/${photo.url || ""}`} // Adjust this line based on the structure of photos
                    alt={product.name}
                    className="h-[300px] w-full object-contain"
                  />
                ))}
              </Carousel>
            </div>
            <div className="w-full xl:w-2/5 p-4 border xl:border-gray-400 border-3  xl:bg-white rounded">
              <h2 className="text-2xl font-bold my-4">{product.name}</h2>
              <p className="text-lg mb-4">
                {product.description || "No description available"}
              </p>
              <p className="text-lg mb-4 flex items-center">
              <GoDotFill className="text-green-600" />
              Available({product.available_quantity || "1"})
              </p>
              <p className="text-2xl font-bold text-[#6C0345] mb-4">
                &#x20A6;{price.toLocaleString()}
              </p>
              <div className="flex flex-col  xl:justify-between items-center gap-4">
                <button
                    className={`p-3 w-full font-medium rounded ${isInCart ? 'bg-gray-500 text-white' : 'bg-[#564E3B] text-white'}`}
                    onClick={() => addToCart({ ...product, price })}
                    disabled={isInCart}
                >
                    {isInCart ? 'Added' : 'Add to cart'}
                    </button>
                <button
                  className="w-full px-4 py-3 font-medium rounded bg-[#6C0345] text-white"
                  onClick={() => handleBuyNow({ ...product, price })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <Product/>
      </div>
    </>
  );
};

export default ProductDetail;
