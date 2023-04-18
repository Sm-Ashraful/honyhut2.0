import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../Store/cart/cart.action";
import { selectCartItems } from "../../Store/cart/cart.selector";

import { addItemToFav } from "../../Store/favorite/favorite.action";
import { selectFavItems } from "@/Store/favorite/favorite.selector";

import Image from "next/image";
import ReviewStar from "../Star";
import OfferPercent from "../offer";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsBagPlus, BsEyeFill } from "react-icons/bs";
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
          className={`relative bg-white px-[3px] md:px-[10px] py-4 transition-all duration-300 hover:scale-95 cursor-pointer group  md:w-auto shadow-allIn rounded-md`}
        >
          <div className="w-full h-32 text-center flex justify-center items-center py-4 overflow-hidden">
            <div className="relative group-hover:scale-125 transition-all  duration-1000">
              <Image src={product.image[0]} width="140" height="140" cover />
            </div>
          </div>
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
            >
              <button className="w-[40%] min-w-[80px] mx-[2px]  px-2 py-4 border-tertiary  rounded-md  border flex justify-around items-center">
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
              </button>
              <button
                className="w-[60%] min-w-[80px] flex justify-center items-center border border-secondaryTextColor bg-secondary text-white hover:bg-honey hover:text-black py-4 text-[10px] md:text-[14px] rounded-md"
                onClick={handleAddToCart}
              >
                <span className="pr-[5px]">
                  <BsBagPlus />
                </span>
                <span className="text-center">Cart</span>
              </button>
            </div>
          </div>

          <div className={`absolute w-full h-16  z-50 top-2 left-2`}>
            <div className=" md:w-12 md:h-12 h-10 w-10  rounded-full text-center">
              <span
                className={`w-full h-full flex items-center bg-primary justify-center text-xl md:text-3xl text-secondary rounded-full md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000 ${
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
              className={`absolute top-2 right-2 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000`}
            >
              <OfferPercent percentage={product.offer} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CommonCard;
