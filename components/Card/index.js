import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./card.module.css";
import Button from "../Button";
import Image from "next/image";

import ReviewStar from "../Star";
import OfferPercent from "../offer";

import { addItemToCart } from "../../Store/cart/cart.action";
import { selectCartItems } from "../../Store/cart/cart.selector";

import { addItemToFav } from "../../Store/favorite/favorite.action";
import { selectFavItems } from "@/Store/favorite/favorite.selector";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

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
          className={`relative shadow-allIn hover:scale-105 transition-all duration-700 bg-white rounded `}
        >
          <div className="rounded w-[14.5rem]  cursor-pointer ">
            <div className="w-full h-[10rem] flex flex-col relative">
              <div className="relative w-full h-full transform hover:scale-125 transition-all duration-1000 rounded-md hover:skew-x-2 overflow-hidden">
                <Image src={product.image[0]} alt={product.name} fill cover />
              </div>
              <div
                className={`absolute w-full h-16  z-50 bottom-0 left-0  flex items-center gap-2 p-5`}
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
            </div>
            {percentage && (
              <div className={`${styles.percentage}`}>
                <OfferPercent percentage={percentage} />
              </div>
            )}

            <div className="py-3 px-5 space-y-2 leading-5">
              <div className="flex justify-between items-center text-sm">
                <ReviewStar className={`flex text-honey`} />
                <p>5 reviews</p>
              </div>
              <div className="">
                <p
                  className="text-sm md:text-lg  text-black text-left font-semibold"
                  style={{ fontSize: `${fontSize}` }}
                >
                  {product.name}
                </p>

                {/* ratting section  */}
              </div>

              <p className=" text-base">
                <span>12 Pouches Per Box</span>
                <br />
                <span>48 Box Per Carton</span>
              </p>

              <p className="flex space-x-8">
                <strong className="text-sm">Price: </strong>
                <strong className=" font-bold text-lg">${product.price}</strong>
              </p>
              {/* <div className="text-center pt-5 underline text-tertiary">
                View
              </div> */}
              <div className="w-full">
                <Button
                  className="w-full bg-primary text-black hover:bg-honey hover:text-black text-lg shadow-md"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Card;
