import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { selectCartOpen } from "@/Store/cart/cart.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";
import { selectCartCount } from "@/Store/cart/cart.selector";
import { selectCartItems } from "@/Store/cart/cart.selector";

import CheckOut from "./cart";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

import styles from "./category-nav.module.css";

const CartNav = ({ headingLine, view, goto }) => {
  const isCartOpen = useSelector(selectCartOpen);
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div
      className={` ${
        isCartOpen
          ? `${styles.rightSidebar} ${styles.show_rightSidebar}`
          : `${styles.rightSidebar}`
      }`}
    >
      <div className="w-full h-auto scrollable-content mb-24">
        <div className="relative flex justify-between items-center p-6   ">
          <p className="text-2xl text-secondary font-bold">{headingLine}</p>
          <p
            className="h-12 w-12 flex items-center justify-center cursor-pointer hover:text-primary-red text-xl  text-primary-red"
            onClick={closeCart}
          >
            <span>Close</span>
            <span className="ml-2">
              <FaTimes />
            </span>
          </p>
        </div>
        {cartItems && (
          <div className="w-full">
            <p className="text-start text-lg font-bold pl-5 text-primary-red">
              Total Item: {cartItems.length}
            </p>
          </div>
        )}
        <hr />
        <div className="relative left-2 h-5/6 w-full text-sm">
          <CheckOut />
        </div>
      </div>

      <div className="absolute bottom-2 flex flex-col w-full">
        <div className="cursor-pointer place-items-center w-full px-4">
          <Link href={"../../cart/shopping-cart"}>
            <div className="text-black bg-secondaryTextColor border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
              {view}
            </div>
          </Link>
        </div>

        <div className="cursor-pointer place-items-center w-full px-4">
          <Link href={"../../cart/checkout"}>
            <button class="text-white bg-primary-red border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
              {goto}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartNav;
