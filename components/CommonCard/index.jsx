import React, { useState } from "react";
import styles from "./style.module.css";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../Store/cart/cart.action";
import { selectCartItems } from "../../Store/cart/cart.selector";

import { addItemToFav } from "../../Store/favorite/favorite.action";
import { selectFavItems } from "@/Store/favorite/favorite.selector";

import Image from "next/image";
import ReviewStar from "../Star";
import Button from "../Button";
import OfferPercent from "../offer";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

const CommonCard = ({ product, percentage }) => {
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
      {product && (
        <div
          className={`relative bg-white pt-4 transition-all duration-300 hover:scale-95 cursor-pointer group`}
        >
          <div className="w-full h-32 text-center flex justify-center items-center py-4">
            <div className="relative">
              <Image src={product.image} width="140" height="140" cover />
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
              Price: {product.price}$
            </p>
            <p className="w-full h-auto flex justify-center space-x-2 items-center">
              <ReviewStar
                className={`flex text-center text-honey text-sm md:text-lg`}
              />
              <span className=" text-primary-red">(10)</span>
            </p>
            <p>
              <Button
                className="w-full bg-primary text-black hover:bg-honey hover:text-black text-lg shadow-md"
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </p>
          </div>

          <div className={`absolute w-full h-16  z-50 top-2 left-2`}>
            <div className=" md:w-12 md:h-12 h-10 w-10  rounded-full text-center">
              <span
                className={`w-full h-full flex items-center bg-primary justify-center text-xl md:text-3xl text-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ${
                  isFavorite && `border`
                }`}
                onClick={handleFavClick}
              >
                {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              </span>
            </div>
          </div>
          {percentage && (
            <div className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-1000`}>
              <OfferPercent percentage={percentage} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CommonCard;
