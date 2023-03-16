import React from "react";
import Image from "next/image";

const New = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className={`my-2 cursor-pointer transition-all`}>
      <div>
        <div className="relative w-full h-36">
          <Image src={image} alt={id} fill cover />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div className=" text-center">
          <p className="heading-text text-md p-2">
            <strong>{price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default New;
