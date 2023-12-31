import React from "react";
import Image from "next/image";

const CategoryCard = ({ animationClass, name, image, totalItem }) => {
  return (
    <div
      className={`h-[200px] max-w-[250px] min-w-[200px] md:h-[250px] px-4 py-6 cursor-pointer transition-all duration-500  hover:scale-105  rounded ${animationClass}`}
    >
      <div className="relative w-full h-3/4 transition-all duration-700 hover:scale-110 rounded-md hover:skew-y-1 overflow-hidden ">
        <Image src={image} alt={name} fill cover />
      </div>

      <div className="py-[20px] px-[10px] flex flex-col justify-center items-center bg-honey  my-[3px] rounded">
        <p className="text-[.85rem] md:text-[.95rem] font-bold text-white capitalize font-sans text-center ">
          {name}
        </p>
        <p className="text-sm text-black">({totalItem} items)</p>
      </div>
    </div>
  );
};

export default CategoryCard;
