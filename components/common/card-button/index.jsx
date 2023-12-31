import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { selectCartItems } from "@/Store/cart/cart.selector";

import { addItemToFav } from "@/Store/favorite/favorite.action";
import { selectFavItems } from "@/Store/favorite/favorite.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";

const CardButton = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const favItems = useSelector(selectFavItems);

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

  return (
    <div className="flex justify-between w-full">
      {/* cart count*/}
      <div className="md:w-32 h-12  w-28 z-20 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000 ">
        <button className="w-full h-full flex justify-around   items-center bg-white opacity-70 text-black  border py-4 text-[10px] md:text-[18px] rounded-md text-center">
          <span
            className=" font-bold cursor-pointer hover:text-honey"
            onClick={decreaseItem}
          >
            <AiOutlineMinus className="text-md font-bold" />
          </span>

          <span>{count}</span>

          <span
            className="font-bold cursor-pointer hover:text-honey"
            onClick={increaseItem}
          >
            <AiOutlinePlus className="text-md font-bold" />
          </span>
        </button>
      </div>
      {/* cart icon*/}

      <div
        className={`w-12 h-12  z-20 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-1000`}
      >
        <button
          className="w-full h-full flex justify-center items-center bg-white opacity-70 text-black hover:bg-black hover:text-white border py-4 text-[10px] md:text-[18px] rounded-md text-center"
          onClick={handleAddToCart}
        >
          <span className="pr-[5px]">
            <FiShoppingCart />
          </span>
          {/* <span className="text-center">Cart</span> */}
        </button>
      </div>
    </div>
  );
};

export default CardButton;
