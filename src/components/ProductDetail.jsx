import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";

const ProductDetail = () => {
  const { productId } = useParams();
  const { state, dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `/api/products/${productId}?organization_id=4fafd488408b4f84b93e7fcdfe67a60c&Appid=0R9IWWN8EN6MGTO&Apikey=6e4f95a94e32403caaa6db8d45e5dbb520240712143047980526`
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading product: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const price = product.current_price[0]?.NGN[0] || 0; // Adjust this line based on the structure of current_price

  return (
    <>
      <Header />
      <div id="product-detail">
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
          <div className="bg-white p-4 rounded-md flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
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
                    className="h-[300px] w-full object-contain "
                  />
                ))}
              </Carousel>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-bold my-4">{product.name}</h2>
              <p className="text-lg mb-4">
                {product.description || "No description available"}
              </p>
              <p className="text-2xl font-bold text-[#6C0345] mb-4">
                &#x20A6;{price.toLocaleString()}
              </p>
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                <button
                  className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 px-4 py-3 font-medium rounded bg-[#564E3B] text-white"
                  onClick={() => addToCart({ ...product, price })}
                >
                  Add to cart
                </button>
                <button className="w-full md:w-auto px-4 py-3 font-medium rounded bg-[#6C0345] text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
