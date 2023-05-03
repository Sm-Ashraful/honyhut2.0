import React from "react";
import Image from "next/image";

const CategoryCard = ({ name, image, totalItem }) => {
  return (
    <div
      className={`h-[200px] w-full md:h-[250px] px-4 py-6 cursor-pointer transition-all duration-500 shadow-allIn  hover:scale-105 bg-white rounded`}
    >
      <div className="relative w-full h-3/4 transition-all duration-700 hover:scale-110 rounded-md hover:skew-x-2 overflow-hidden ">
        <Image src={image} alt={name} fill cover />
      </div>

      <div className="pt-[1.25rem] flex flex-col justify-center items-center h-1/4">
        <p className="text-[1.2rem] md:text-[1.4rem] font-semibold uppercase font-sans text-center ">
          {name}
        </p>
        <p className="text-sm text-tertiary">({totalItem} items)</p>
      </div>
    </div>
  );
};

export default CategoryCard;
