import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { selectCartOpen } from "@/Store/cart/cart.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";

import CheckOut from "./cart";
import Link from "next/link";

// import styles from "./category-nav.module.css";

const CartNav = ({ headingLine, view, goto }) => {
  const isCartOpen = useSelector(selectCartOpen);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div>
      {isCartOpen && (
        <div className="heightFull bg-white higherPriority absolute top-0 md:right-3 right-2 flex justify-center md:w-1/4">
          <div className="w-full">
            <div className="relative flex justify-between items-center p-6   ">
              <p className="text-2xl text-secondary pl-4 font-bold">
                {headingLine}
              </p>
              <p
                className="flex text-secondary cursor-pointer hover:text-primary-red text-2xl"
                onClick={closeCart}
              >
                <AiOutlineClose className="mr-2 mt-1" />
                <span>close</span>
              </p>
            </div>

            <div className="relative left-2 h-96 w-full ">
              <CheckOut />
            </div>
          </div>

          <div className=" bottom-24  cursor-pointer absolute place-items-center w-full px-4">
            <div className="text-black bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
              <Link href={"../../cart/cart"}>{view}</Link>
            </div>
          </div>

          <div className=" bottom-10  cursor-pointer absolute place-items-center w-full px-4">
            <button class="text-black bg-gray border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
              <Link href={"../../cart/checkout"}>{goto}</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNav;
