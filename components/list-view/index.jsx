import React, { useState } from "react";

import CardButton from "../common/card-button";

import Image from "next/image";
import ReviewStar from "../Star";
import OfferPercent from "../offer";

const ListView = ({ product }) => {
  const MAX_LENGTH = 20;
  const fontSize = product.name.length > MAX_LENGTH ? "1rem" : "1.125rem";

  function countClickHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      {product && (
        <div
          className={`relative shadow-md w-full    transition-all duration-300 cursor-pointer`}
        >
          {/* image section  */}
          <div className="relative w-full flex">
            <div className="relative basis-full md:basis-[80%] md:h-64 h-52  overflow-hidden shadow-photo rounded-md text-center flex justify-center items-center group">
              <div className="w-full h-full relative group-hover:scale-125 transition-all  duration-1000 text-center flex justify-center items-center">
                <Image src={product.image[0]} alt="product Image" fill cover />
              </div>
              <div className="absolute bottom-2 md:top-[40%] right-2  md:right-auto">
                <CardButton product={product} />
              </div>
            </div>
            {product.offer && (
              <div className={`absolute top-0 left-0  opacity-100`}>
                <OfferPercent percentage={product.offer} />
              </div>
            )}
            {/* description section  */}
            <div className="w-full ml-8">
              <p className=" text-[15px] md:text-[18px] leading-6 md:leading-8 pb-3 md:pb-5 font-bold">
                {product.name}
              </p>
              <p className="text-[13px] md:text-[17px] font-bold pb-2 md:pb-3">
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
                        ).toFixed(2)}{" "}
                      </span>
                    )}
                  </>
                ) : (
                  <span>${product.price.toFixed(2)}</span>
                )}
              </p>
              <p className="text-[13px] md:text-[16px] font-bold pb-2 md:pb-3">
                {product.unit}
              </p>
              <p className="text-[12px] leading-4 md:leading-6 md:text-[16px] pb-2 md:pb-3">
                100% authentic honey sachets, formulated from the
                highest-quality Malaysian ingredients
              </p>

              <p className="w-full h-auto flex md:pb-3">
                <ReviewStar
                  className={`flex text-center text-honey text-sm md:text-lg`}
                />
                <span className=" text-primary-red">(4)</span>
              </p>
              <p className=" text-black text-lg">
                In stock:
                <span className="text-secondaryTextColor"> Available</span>
              </p>
              <div
                className="flex  w-full justify-between items-center md:px-5   text-sm"
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

export default ListView;
