import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import ReviewStar from "../Star";
import OfferPercent from "../offer";

import { addItemToCart } from "../../Store/cart/cart.action";
import { selectCartItems } from "../../Store/cart/cart.selector";

import { addItemToFav } from "../../Store/favorite/favorite.action";
import { selectFavItems } from "@/Store/favorite/favorite.selector";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const Card = ({ product, percentage }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const favItems = useSelector(selectFavItems);
  const MAX_LENGTH = 20;
  const fontSize = product.name.length > MAX_LENGTH ? "1rem" : "1.125rem";

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product));
  };

  const handleFavClick = (e) => {
    e.preventDefault();
    dispatch(addItemToFav(favItems, product));
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {
        <div
          className={`relative  hover:scale-105 transition-all duration-700 bg-white rounded mx-2 md:mx-3 my-10`}
        >
          <div className="rounded w-[15rem]  md:w-[20rem] h-auto  cursor-pointer">
            <div className="w-full h-[12rem] md:h-[14rem] flex flex-col relative  shadow-allIn">
              <div className="relative w-full h-full transform hover:scale-125 transition-all duration-1000 rounded-md hover:skew-x-2 overflow-hidden">
                <Image src={product.image[0]} alt={product.name} fill cover />
              </div>
              <div
                className={`absolute w-full h-16  z-50 top-0 -left-3  flex items-center gap-2 p-5`}
              >
                <div className=" w-12 h-12  rounded-full text-center">
                  <span
                    className={`w-full h-full flex items-center bg-primary justify-center text-3xl text-secondary rounded-full ${
                      isFavorite && `border`
                    }`}
                    onClick={handleFavClick}
                  >
                    {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                  </span>
                </div>
              </div>
              {product.offer && (
                <div
                  className={`absolute -top-10 -right-1 md:transition-all md:duration-1000`}
                >
                  <OfferPercent percentage={product.offer} />
                </div>
              )}
            </div>

            <div className="relative py-3 px-5 space-y-2 leading-5">
              <div className="flex justify-between items-center text-sm">
                <ReviewStar className={`flex text-honey`} />
                <p>5 reviews</p>
              </div>
              <div className="">
                <p className="text-[1.2rem] text-black text-left ">
                  {product.name.length > 25
                    ? `${product.name.slice(0, 25)}...`
                    : product.name}
                </p>

                {/* ratting section  */}
              </div>

              <p className="md:text-xl font-bold">
                <span>Price: </span>
                {typeof product.offer === "number" ? (
                  <>
                    <span className={`${product.offer ? "line-through" : ""}`}>
                      ${product.price}
                    </span>
                    {product.offer && (
                      <span className="ml-3 text-primary-red">
                        ${product.price - (product.price * product.offer) / 100}
                      </span>
                    )}
                  </>
                ) : (
                  <span>${product.price}</span>
                )}
              </p>
              {/* <div className="text-center pt-5 underline text-tertiary">
                View
              </div> */}
              <div className="w-full flex justify-center ">
                <button
                  type="button"
                  class="w-3/4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  <Link
                    className="flex text-[12px]"
                    href={`/checkout/checkout?productId=${product.id}`}
                  >
                    <span className="mr-[4px]">Order Now</span>
                    <svg
                      class="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                    </svg>
                  </Link>
                </button>

                <button
                  className="ml-2 w-1/4 h-full flex justify-center items-center bg-white text-black hover:bg-black hover:text-white border py-4 text-[10px] md:text-[18px] rounded-md text-center"
                  onClick={handleAddToCart}
                >
                  <span className="pr-[5px]">
                    <FiShoppingCart />
                  </span>
                  {/* <span className="text-center">Cart</span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Card;
