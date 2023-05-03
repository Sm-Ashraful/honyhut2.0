import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../Store/cart/cart.action";
import { selectCartItems } from "../../Store/cart/cart.selector";

import { addItemToFav } from "../../Store/favorite/favorite.action";
import { selectFavItems } from "@/Store/favorite/favorite.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";

import Image from "next/image";
import ReviewStar from "../Star";
import OfferPercent from "../offer";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CommonCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const favItems = useSelector(selectFavItems);
  const MAX_LENGTH = 20;
  const fontSize = product.name.length > MAX_LENGTH ? "1rem" : "1.125rem";

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product, count));
    dispatch(setIsCartOpen(true));
  };

  const handleFavClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItemToFav(favItems, product));
    setIsFavorite(!isFavorite);
  };
  function increaseItem(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  function decreaseItem(e) {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function countClickHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      {product && (
        <div
          className={`relative flex flex-col justify-center items-center px-[3px] md:px-[10px] py-4 md:w-auto transition-all duration-300 cursor-pointer`}
        >
          {/* image section  */}
          <div className=" w-72 h-56 bg-white overflow-hidden shadow-allIn rounded-md text-center flex justify-center items-center group">

            <div
              className={`absolute md:w-12 md:h-12 h-10 w-10 z-50 top-28 left-40 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000`}
            >
              <div className=" md:w-12 md:h-12 h-10 w-10  rounded-full text-center">
                <span
                  className={`w-full h-full flex items-center justify-center bg-white text-black hover:bg-black hover:text-white border text-xl md:text-3xl rounded-md md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000 ${
                    isFavorite && `border`
                  }`}
                  onClick={handleFavClick}
                >
                  {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                </span>
              </div>
            </div>

            <div
              className={`absolute md:w-12 md:h-12 h-10 w-10 z-50 top-28 right-40 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000`}
            >
              <button
                className="md:w-12 md:h-12 h-10 w-10 flex justify-center items-center bg-white text-black hover:bg-black hover:text-white border py-4 text-[10px] md:text-[18px] rounded-md text-center"
                onClick={handleAddToCart}
              >
                <span className="pr-[5px]">
                  <FiShoppingCart />
                </span>
                {/* <span className="text-center">Cart</span> */}
              </button>
            </div>

            <div className="w-full h-full relative group-hover:scale-125 transition-all  duration-1000 text-center flex justify-center items-center">
              <Image src={product.image[0]} fill cover />
            </div>
          </div>

          {/* description section  */}
          <div className="w-full pt-5">
            <p
              className="md:text-xl font-bold text-center"
              style={{ fontSize: `${fontSize}` }}
            >
              {product.name}
            </p>
            <p className="md:text-xl font-bold text-center">
              <span>Price: </span>
              {typeof product.offer === "number" ? (
                <>
                  <span className={`${product.offer ? "line-through" : ""}`}>
                    ${product.price}
                  </span>
                  {product.offer && (
                    <span className="ml-3 text-primary-red">
                      $
                      {(
                        product.price -
                        (product.price * product.offer) / 100
                      ).toFixed(2)}
                    </span>
                  )}
                </>
              ) : (
                <span>${product.price.toFixed(2)}</span>
              )}
            </p>
            <p className="w-full h-auto flex justify-center space-x-2 items-center">
              <ReviewStar
                className={`flex text-center text-honey text-sm md:text-lg`}
              />
              <span className=" text-primary-red">(4)</span>
            </p>
            <p className="text-center text-black text-lg">
              In stock:
              <span className="text-secondaryTextColor"> Available</span>
            </p>
            <div
              className="flex  w-full justify-between items-center md:px-5  py-2 text-sm"
              onClick={countClickHandler}
            ></div>
          </div>

          {/* <button className="w-[40%] min-w-[80px] mx-[2px]  px-2 py-4 border-tertiary  rounded-md  border flex justify-around items-center">
                <span
                  className=" font-bold cursor-pointer text-tertiary hover:text-secondary "
                  onClick={decreaseItem}
                >
                  <AiOutlineMinus className="text-md font-bold" />
                </span>

                <span>{count}</span>

                <span
                  className="font-bold cursor-pointer "
                  onClick={increaseItem}
                >
                  <AiOutlinePlus className="text-md font-bold" />
                </span>
              </button> */}

          {/* offer section  */}
          {product.offer && (
            <div className={`absolute top-2 right-16 opacity-100`}>
              <OfferPercent percentage={product.offer} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CommonCard;
