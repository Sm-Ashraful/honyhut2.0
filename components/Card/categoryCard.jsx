import React from "react";
import Image from "next/image";

import styles from "./card.module.css";

const CategoryCard = ({ name, image }) => {
  return (
    <div
      className={`${styles.card} my-2 cursor-pointer transition-all duration-300 shadow-hnx  hover:scale-105 bg-white`}
    >
      <div className="relative w-full h-3/4 transition-all duration-500 hover:scale-110 rounded-md hover:skew-x-2 overflow-hidden">
        <Image src={image} alt={name} fill cover />
      </div>

      <div className="pt-8 text-center h-1/4">
        <p className="text-xl font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
