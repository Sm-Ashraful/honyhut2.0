import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { getProductByIdSecond } from "../../utils/products-demo";
import { getProductById } from "../../utils/products";
import { getProductByIdThird } from "@/utils/fav-demo-data";
import { useDispatch } from "react-redux";

import {
  removeItem,
  decreaseCartItem,
  addItemToCart,
  addShippingCost,
} from "../../Store/cart/cart.action";

export default function CheckoutItems({
  cartItems,
  shippingCost = 0,
  cartTotal = 0,
}) {
  const [orderToggle, setOrderToggle] = useState(true);
  const [checkoutCartItems, setCheckoutCartItems] = useState(cartItems);
  let product;
  const router = useRouter();
  const dispatch = useDispatch();
  const productId = router.query.productId;

  if (productId) {
    product =
      Number(productId) > 84
        ? Number(productId) > 102
          ? getProductByIdThird(productId)
          : getProductByIdSecond(productId)
        : getProductById(productId);
  }

  useEffect(() => {
    if (product) {
      const exixting = cartItems.find((cartItem) => {
        return cartItem.id === product.id;
      });
      if (!exixting) {
        cartItems.push(product);
      }
    }
  }, []);

  const handleCheckoutCartItemDecrease = (cartItem) => {
    dispatch(decreaseCartItem(cartItems, cartItem));
  };

  const handleCheckoutCartItemIncrease = (cartItem) => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const removeCheckoutItem = (cartItem, e) => {
    e.preventDefault();
    dispatch(removeItem(cartItems, cartItem));
  };

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
          USD {(cartTotal + shippingCost).toFixed(2)}$
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
                      <div className="flex justify-center items-center border border-tertiary text-primary-red rounded-full py-2 w-40 bg-white">
                        {cartItem.quantity}
                        <span
                          onClick={() =>
                            handleCheckoutCartItemDecrease(cartItem)
                          }
                          className="mr-2 ml-12 font-bold cursor-pointer hover:text-primary-red  rounded-lg"
                        >
                          <AiOutlineMinus />
                        </span>
                        <span
                          onClick={() =>
                            handleCheckoutCartItemIncrease(cartItem)
                          }
                          className="ml-2 font-bold cursor-pointer hover:text-primary-red  rounded-full"
                        >
                          <AiOutlinePlus />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2 flex justify-end items-center">
                    <span
                      onClick={(e) => removeCheckoutItem(cartItem, e)}
                      className="text-primary-red font-semibold cursor-pointer"
                    >
                      Remove
                    </span>
                    <strong className="pl-[45px]">
                      {typeof cartItem.offer === "number" ? (
                        <>
                          {cartItem.offer && (
                            <span>
                              <span>{cartItem.quantity}</span>
                              <span className="px-5 text-primary-red">X</span>
                              <span>
                                {(
                                  cartItem.price -
                                  (cartItem.price * cartItem.offer) / 100
                                ).toFixed(2)}
                              </span>
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
            {
              <>
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
                <p className="flex justify-end">
                  <hr className="w-[20%]  border-2 border-white" />
                </p>
                <div className="flex justify-between items-center text-[1.5rem] text-primary-red py-2 font-semibold">
                  <p>Total: </p>
                  <p>USD {(cartTotal + shippingCost).toFixed(2)}$</p>
                </div>
              </>
            }
          </div>
        </div>
      )}
    </div>
  );
}
