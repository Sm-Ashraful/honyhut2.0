import React from "react";

import { FiShoppingCart } from "react-icons/fi";

import { addItemToCart, emptyCard } from "@/Store/cart/cart.action";
import { selectCartItems } from "@/Store/cart/cart.selector";
import { setIsCartOpen } from "@/Store/cart/cart.action";

import Image from "next/image";
import OfferPercent from "../../../components/offer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const CarCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const router = useRouter();

  function countClickHandler(e) {
    e.preventDefault();
  }

  //add cart functionality
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(emptyCard());
    dispatch(addItemToCart(cartItems, product, 1));
    router.push("/checkout/checkout");
  };

  return (
    <>
      {product && (
        <div
          className={`relative w-[full]  flex flex-col border border-customTheme/20 rounded-md justify-center items-center px-[3px] md:px-[10px] pb-4 transition-all duration-300 cursor-pointer`}
        >
          {/* image section  */}
          <div className="relative w-full">
            <div className="relative w-auto h-44 md:h-52 bg-white overflow-hidden  rounded-md text-center flex justify-center items-center group border-b mb-2">
              <div className="relative group-hover:scale-125 transition-all  duration-1000 text-center flex justify-center items-center">
                <Image
                  src={`${
                    product.image
                      ? product.image[0]
                      : product.productPictures[0].img
                  }`}
                  alt="product Image"
                  width={300}
                  height={300}
                  className="w-[100px] h-auto"
                />
              </div>
            </div>
            {product.offer && (
              <div className={`absolute  -left-[5px] rounded-sm  b_anim`}>
                <OfferPercent percentage={product.offer} />
              </div>
            )}
            {/**cart buttion */}

            {/* description section  */}
            <div className="w-full pt-2  px-2 ">
              {
                <p className="text-[#666] pb-1.5 text-sm">
                  {product.name.length > 35
                    ? product.name.slice(0, 35) + "..."
                    : product.name}
                </p>
              }

              <p className="text-[13px] font-bold pb-2 md:pb-3">
                <span>Price: </span>
                {typeof product.offer === "number" ? (
                  <>
                    <span className={`${product.offer ? "line-through" : ""}`}>
                      ${product.price}
                    </span>
                    {product.offer && (
                      <span className="ml-3 text-primary-red">
                        $
                        {(
                          product.price -
                          (product.price * product.offer) / 100
                        ).toFixed(2)}
                      </span>
                    )}
                  </>
                ) : (
                  <span>${product.price.toFixed(2)}</span>
                )}{" "}
                /box
              </p>

              <p className=" text-black text-[14px]">
                Minimum order Qty:
                <span className="text-secondaryTextColor"> 10</span>
              </p>
              <p className=" text-black text-[14px]">
                In stock:
                <span className="text-secondaryTextColor"> Available</span>
              </p>
              <div
                className="flex  w-full justify-between items-center md:px-5"
                onClick={countClickHandler}
              ></div>
              <div className="mx-2 pt-3">
                <button
                  type="submit"
                  className="flex gap-2 items-center justify-center bg-customTheme text-customText pb-2 w-full border border-[#666] rounded-full mx-auto text-center px-5 py-2"
                  onClick={handleAddToCart}
                >
                  <FiShoppingCart />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* offer section  */}
        </div>
      )}
    </>
  );
};

export default CarCard;
