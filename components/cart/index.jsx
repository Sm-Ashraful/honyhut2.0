import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { selectCartOpen } from "@/Store/cart/cart.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";

import CheckOut from "./checkOut";
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
        <div className="heightFull w-96 bg-primary higherPriority absolute top-0 right-3 flex justify-center">
          <div className="top-8 w-full">
            <div
              onClick={closeCart}
              className="absolute right-4 flex top-2 text-secondary cursor-pointer text-3xl ml-2 font-bold hover:text-primary-red"
            >
              <AiOutlineCloseCircle className="mr-4 mt-1" />
            </div>
            <div>
              <p className="text-3xl text-center mt-16 text-secondary ">
                {headingLine}
              </p>
              <hr className="h-px my-4 bg-secondary border-0 dark:bg-secondary" />
            </div>

            <div className="relative left-2 h-96 w-full ">
              <CheckOut />
            </div>
          </div>

          <div className=" bottom-24  cursor-pointer absolute place-items-center">
            <Link
              href={"../../cart/cart"}
              class="text-black bg-gray border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center"
            >
              View Cart
              {view}
            </Link>
          </div>

          <div className=" bottom-10  cursor-pointer absolute place-items-center">
            <button class="text-black bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center">
              {goto}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNav;
