import React, { useEffect } from "react";
import styles from "./style.module.css";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import Image from "next/image";
import ReviewStar from "../Star";
import Button from "../Button";

const CommonCard = ({ product }) => {
  return (
    <>
      {product && (
        <div className={`relative bg-white`}>
          <div className="w-full h-32 text-center flex justify-center items-center">
            <div>
              <Image src={product.image} width="120" height="120" cover />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xl font-bold text-center">Name of the product</p>
            <p className="text-xl font-bold text-center">Price: 7$</p>
            <p className="w-full h-auto flex justify-center space-x-2 items-center">
              <ReviewStar className={`flex text-center text-honey text-lg`} />
              <span className=" text-primary-red">(10)</span>
            </p>
            <p>
              <Button className="w-full bg-primary text-black hover:bg-honey hover:text-black text-lg shadow-md">
                Shop Now
              </Button>
            </p>
          </div>

          <div className={`absolute w-full h-16  z-50 top-2 left-2`}>
            <div className=" w-12 h-12  rounded-full text-center">
              <span className="w-full h-full flex items-center bg-primary justify-center text-3xl text-black rounded-full ">
                <MdOutlineFavoriteBorder />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonCard;
