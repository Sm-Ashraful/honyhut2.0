import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useEffect } from "react";

import { selectCartOpen } from "@/Store/cart/cart.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";
import { selectCartTotal } from "@/Store/cart/cart.selector";
import { selectCartItems } from "@/Store/cart/cart.selector";

import { useRouter } from "next/router";

import CheckOut from "./cart";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

import styles from "./category-nav.module.css";

const CartNav = ({ headingLine, view, goto }) => {
  const isCartOpen = useSelector(selectCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const router = useRouter();

  const cartRef = useRef(null);

  const dispatch = useDispatch();
  const closeCart = (event) => {
    event.preventDefault();
    dispatch(setIsCartOpen(false));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        dispatch(setIsCartOpen(false));
      }
    }

    function handleRouteChange() {
      dispatch(setIsCartOpen(false));
    }

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      router.events.on("routeChangeComplete", handleRouteChange);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isCartOpen]);

  return (
    <div
      ref={cartRef}
      className={` ${
        isCartOpen
          ? `${styles.rightSidebar} ${styles.show_rightSidebar}`
          : `${styles.rightSidebar}`
      }`}
    >
      <div className="w-full h-full  mb-24 relative">
        <div className="fixed top-0 px-5 py-5 flex justify-between items-center shadow-md w-full z-10">
          <p className="text-xl text-headingColor font-bold">
            <span>{headingLine}</span>
            <hr class="w-[60px] my-[5px] border-2  border-honey" />
          </p>

          <p
            className="h-12 w-12 flex items-center justify-center cursor-pointer hover:text-primary-red text-xl  text-primary-red"
            onClick={closeCart}
          >
            <span className="ml-2">
              <FaTimes />
            </span>
          </p>
        </div>
        <div
          className={`relative w-full h-full mt-32 z-0 overflow-x-hidden overflow-y-auto ${styles.myContainer}`}
          myContainer
        >
          {cartItems.length > 0 ? (
            <div className="w-full">
              <div className="relative left-2 h-5/6 w-full text-sm">
                <CheckOut />
              </div>
              <div className="fixed bottom-0 mb-2 flex flex-col w-full">
                <div className="px-5">
                  <hr className="w-full h-[1px]  bg-gray border-0" />
                  <div className="flex justify-between items-center py-5 text-xl font-bold text-primary-red">
                    <p>SubTotal</p>
                    <p>${cartTotal.toFixed(2)}</p>
                  </div>
                  <hr className="w-full h-[1px]  bg-gray border-0" />
                  <p className="text-sm py-3">
                    <span className="text-primary-red">*</span>No need to pay
                    additional shipping charge
                  </p>
                </div>
                <div className="cursor-pointer place-items-center w-full px-4 py-2">
                  <Link href={"../../cart/shopping-cart"}>
                    <div className="text-black bg-secondaryTextColor border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
                      {view}
                    </div>
                  </Link>
                </div>

                <div className="cursor-pointer place-items-center w-full px-4">
                  <Link href={"../../checkout/checkout"}>
                    <button class="text-white bg-primary-red border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
                      {goto}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-5 items-center w-full h-full text-2xl text-black">
              <p className="text-center">Your Cart Is Empty</p>
              <Link href="/allproducts">
                <button className="border border-honey px-5 py-3">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartNav;
