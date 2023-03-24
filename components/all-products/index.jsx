import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaMale, FaFemale, FaSmoking } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

import Male from "../../Assets/Category/Male.jpeg";
import Female from "../../Assets/Category/Fmale.jpeg";
import Condoms from "../../Assets/Category/Condoms.jpeg";
import Cannabies from "../../Assets/Category/Cannabies.jpeg";

const Products = () => {
  return (
    <div>
      <div className="bg-primary w-full h-auto relative top-4">
        <p className="border-b-2 text-secondary mt-2">Categories</p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="py-5  cursor-pointer hover:bg-white shadow-hnx">
            <h1 className="flex flex-col gap-2 justify-center items-center font-bold  text-center hover:text-honey">
              <FaMale className="text-tertiary" />
              <strong>Male Enhancement</strong>
            </h1>
          </div>

          <div className="py-5 cursor-pointer hover:bg-white shadow-hnx">
            <h1 className="flex flex-col gap-2 justify-center items-center font-bold text-center hover:text-honey">
              <FaFemale className="text-tertiary" />
              <strong> Female Enhancement</strong>
            </h1>
          </div>

          <div className="py-5 cursor-pointer hover:bg-white shadow-hnx">
            <h1 className="flex flex-col gap-2 justify-center items-center font-bold text-center hover:text-honey">
              <BsFillSuitHeartFill className="text-tertiary" />
              <strong>Condoms</strong>
            </h1>
          </div>

          <div className="py-5 cursor-pointer hover:bg-white shadow-hnx">
            <h1 className="flex flex-col gap-2 justify-center items-center font-bold text-center hover:text-honey">
              <FaSmoking className="text-tertiary" />
              <strong>Cannabies Accessories</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
