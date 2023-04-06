import React from "react";
import Image from "next/image";

import styles from "./card.module.css";

const CategoryCard = ({ name, image }) => {
  return (
    <div
      className={`h-[200px] w-full md:w-[200px] px-4 py-6 cursor-pointer transition-all duration-500 shadow-allIn  hover:scale-105 bg-white rounded`}
    >
      <div className="relative w-full h-3/4 transition-all duration-700 hover:scale-110 rounded-md hover:skew-x-2 overflow-hidden">
        <Image src={image} alt={name} fill cover />
      </div>

      <div className="pt-3 flex justify-center items-center h-1/4">
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
