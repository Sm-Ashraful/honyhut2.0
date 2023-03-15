import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./card.module.css";
import Button from "../Button";
import Image from "next/image";

import ReviewStar from "../Star";
import OfferPercent from "../offer";

import { addItemToCart } from "../../Store/cart/cart.action";
import { selectCartItems } from "../../Store/cart/cart.selector";

import { MdOutlineFavoriteBorder } from "react-icons/md";

const Card = ({ product, percentage }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <>
      {
        <div
          className={`${styles.productCard} shadow-hnx hover:scale-105 transition-all duration-300 bg-white`}
        >
          <div className="rounded  cursor-pointer w-64 h-full">
            <div className="w-full h-52 flex flex-col relative">
              <div className="relative w-full h-full transition-all duration-500 hover:scale-110 rounded-md hover:skew-x-2 overflow-hidden">
                <Image src={product.image} alt={product.name} fill contain />
              </div>
              <div
                className={`absolute w-full h-16  z-50 bottom-0 left-0  flex items-center gap-2 p-5`}
              >
                <div className=" w-12 h-12  rounded-full text-center">
                  <span className="w-full h-full flex items-center bg-primary justify-center text-3xl text-black rounded-full ">
                    <MdOutlineFavoriteBorder />
                  </span>
                </div>
              </div>
            </div>
            {percentage && (
              <div className={`${styles.percentage}`}>
                <OfferPercent percentage={percentage} />
              </div>
            )}

            <div className="py-3 px-5 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <ReviewStar className={`flex text-honey`} />
                <p>5 reviews</p>
              </div>
              <div className="">
                <p className="text-sm md:text-lg text-black text-left">
                  <strong>{product.name}</strong>
                </p>

                {/* ratting section  */}
              </div>

              <p className=" text-base">
                <span>12 Poches Per Box</span>
                <br />
                <span>48 Box Per Carton</span>
              </p>

              <p className="flex space-x-8">
                <strong>Price: </strong>
                <strong className=" font-bold text-xl">7$</strong>
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
