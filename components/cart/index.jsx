import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { selectCartOpen } from "@/Store/cart/cart.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";
import { selectCartCount } from "@/Store/cart/cart.selector";
import { selectCartItems } from "@/Store/cart/cart.selector";

import CheckOut from "./cart";
import Link from "next/link";

// import styles from "./category-nav.module.css";

const CartNav = ({ headingLine, view, goto }) => {
  const isCartOpen = useSelector(selectCartOpen);
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div>
      {isCartOpen && (
        <div className="h-[480px]   bg-white higherPriority absolute top-12 md:right-3 -right-6 flex justify-center w-[380px] md:w-[420px] shadow-allIn">
          <div className="w-full h-auto scrollable-content mb-24">
            <div className="relative flex justify-center items-center p-6   ">
              <p className="text-2xl text-secondary font-bold border-b-2">
                {headingLine}
              </p>
              <p
                className="absolute top-0 right-0  h-12 w-12 md:hidden flex items-center justify-center cursor-pointer hover:text-primary-red text-xl  text-primary-red"
                onClick={closeCart}
              >
                <AiOutlineClose />
              </p>
            </div>
            {cartItems && (
              <div className="w-full">
                <p className="text-end text-lg font-bold pr-5 text-primary-red">
                  Total ITem: {cartItems.length}
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
              <div className="text-black bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
                <Link href={"../../cart/shopping-cart"}>{view}</Link>
              </div>
            </div>

            <div className="cursor-pointer place-items-center w-full px-4">
              <button class="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
                <Link href={"../../cart/checkout"}>{goto}</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNav;
