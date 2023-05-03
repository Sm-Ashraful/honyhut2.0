import React, { useState } from "react";

import CardButton from "../common/card-button";

import Image from "next/image";
import ReviewStar from "../Star";
import OfferPercent from "../offer";

const CommonCard = ({ product }) => {
  const MAX_LENGTH = 20;
  const fontSize = product.name.length > MAX_LENGTH ? "1rem" : "1.125rem";

  function countClickHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      {product && (
        <div
          className={`relative w-[full]  flex flex-col justify-center items-center px-[3px] md:px-[10px] py-4 transition-all duration-300 cursor-pointer`}
        >
          {/* image section  */}
          <div className="relative w-full">
            <div className="relative w-full h-52 md:h-64 bg-white overflow-hidden shadow-allIn rounded-md text-center flex justify-center items-center group">
              <div className="w-full h-full relative group-hover:scale-125 transition-all  duration-1000 text-center flex justify-center items-center">
                <Image src={product.image[0]} fill cover />
              </div>
              <div className="absolute bottom-2 md:top-[40%]">
                <CardButton product={product} />
              </div>
            </div>
            {product.offer && (
              <div className={`absolute -top-10 -right-3  opacity-100`}>
                <OfferPercent percentage={product.offer} />
              </div>
            )}
            {/* description section  */}
            <div className="w-full pt-5">
              <p className="md:text-xl text-center text-[17px] leading-6">
                {product.name}
              </p>
              <p className="md:text-xl font-bold text-center">
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
              <p className="w-full h-auto flex justify-center space-x-2 items-center">
                <ReviewStar
                  className={`flex text-center text-honey text-sm md:text-lg`}
                />
                <span className=" text-primary-red">(4)</span>
              </p>
              <p className="text-center text-black text-lg">
                In stock:
                <span className="text-secondaryTextColor"> Available</span>
              </p>
              <div
                className="flex  w-full justify-between items-center md:px-5  py-2 text-sm"
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
