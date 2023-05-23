import React from "react";

import CardButton from "../common/card-button";

import Image from "next/image";
import { renderStars } from "@/utils/render-star";
import OfferPercent from "../offer";

const CommonCard = ({ product }) => {
  function countClickHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      {product && (
        <div
          className={`relative w-[full]  flex flex-col justify-center items-center px-[3px] md:px-[10px] pb-4 transition-all duration-300 cursor-pointer`}
        >
          {/* image section  */}
          <div className="relative w-full">
            <div className="relative w-full h-44 md:h-52 bg-white overflow-hidden shadow-photo rounded-md text-center flex justify-center items-center group">
              <div className="w-full h-full relative group-hover:scale-125 transition-all  duration-1000 text-center flex justify-center items-center">
                <Image src={product.image[0]} alt="product Image" fill cover />
              </div>
              <div className="absolute bottom-2 md:top-[40%] right-2  md:right-auto">
                <CardButton product={product} />
              </div>
            </div>
            {product.offer && (
              <div className={`absolute -top-2 -right-1  opacity-100`}>
                <OfferPercent percentage={product.offer} />
              </div>
            )}
            {/* description section  */}
            <div className="w-full pt-5 shadow-sm px-2 pb-3">
              <p className="text-[15px]   pb-2 font-bold">{product.name}</p>
              <p className="w-full h-auto flex pb-2 text-primary-red">
                {renderStars(product.star)}
              </p>
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
                )}
              </p>

              <p className=" text-black text-[14px]">
                In stock:
                <span className="text-secondaryTextColor"> Available</span>
              </p>
              <div
                className="flex  w-full justify-between items-center md:px-5"
                onClick={countClickHandler}
              ></div>
            </div>
          </div>

          {/* offer section  */}
        </div>
      )}
    </>
  );
};

export default CommonCard;
