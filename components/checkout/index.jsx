import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
  selectShippingCost,
} from "../../Store/cart/cart.selector";

export default function CheckoutItems() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const shippingCost = useSelector(selectShippingCost);
  const [orderToggle, setOrderToggle] = useState(true);

  return (
    <div className="relative w-full px-5">
      <div
        className={` w-full flex justify-between items-center shadow-sm mb-5 md:pt-5`}
      >
        <span
          onClick={() => setOrderToggle(!orderToggle)}
          className="md:hidden flex justify-center items-center gap-[5px] text-secondary text-[1.4rem] py-5"
        >
          <span>
            <AiOutlineShoppingCart />
          </span>
          {orderToggle ? <p>Hide order summary</p> : <p>Show Order Summary</p>}
          <span>
            {orderToggle ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
        </span>
        <span className="hidden md:flex justify-between items-center">
          <span>
            <AiOutlineShoppingCart />
          </span>
          <p className="pl-5">Your Order Summary</p>
        </span>
        <span className="text-xl font-bold">
          USD {(cartTotal + shippingCost).toFixed(2)} $
        </span>
      </div>
      {orderToggle && (
        <div className="text-[1.1rem] pb-5">
          {cartItems.map((cartItem, idx) => {
            return (
              <div>
                <div className="h-[64px] w-full flex mb-[15px] justify-between items-center relative">
                  <div className="absolute flex justify-center items-center left-[50px] top-[-12px] w-[2.1rem] h-[2.1rem] bg-fullAsh rounded-full z-50">
                    <span className="text-center text-primary">
                      {cartItem.quantity}
                    </span>
                  </div>
                  <div className="flex h-full items-center">
                    <div className="h-full w-[64px] relative p-3 border bg-white border-fullAsh rounded-md overflow-hidden mr-5">
                      <Image src={cartItem.image[0]} fill cover />
                    </div>
                    <div>
                      <p className="font-semibold">{cartItem.name}</p>
                      <p className="text-lg">
                        {(cartItem.category && cartItem.category) ||
                          (cartItem.MOQ && cartItem.MOQ) ||
                          (cartItem.unit && cartItem.unit)}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <strong className="">
                      {typeof cartItem.offer === "number" ? (
                        <>
                          {cartItem.offer && (
                            <span>
                              USD{" "}
                              {(
                                cartItem.price -
                                (cartItem.price * cartItem.offer) / 100
                              ).toFixed(2)}{" "}
                              $
                            </span>
                          )}
                        </>
                      ) : (
                        <span>USD {cartItem.price.toFixed(2)} $</span>
                      )}
                    </strong>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <hr className="w-full h-[2px]  bg-white border-0" />
            <div className="flex justify-between pt-2">
              <p>Subtotal: </p>
              <p className="font-medium">USD {cartTotal.toFixed(2)}$</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping: </p>
              {shippingCost === 0 ? (
                <p className="font-medium">Free</p>
              ) : (
                <p className="font-medium">USD {shippingCost}$</p>
              )}
            </div>
            <div className="flex justify-between items-center text-[1.5rem] text-primary-red py-2 font-semibold">
              <p>Total: </p>
              <p>USD {(cartTotal + shippingCost).toFixed(2)} $</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
