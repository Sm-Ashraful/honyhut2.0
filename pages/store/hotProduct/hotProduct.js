import Image from "next/image";
import React from "react";

const Hot = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className={`my-2 cursor-pointer transition-all`}>
      <div>
        <div className="relative w-full h-36">
          <Image src={image} alt={id} fill cover />
        </div>
        <p className="heading-text text-md p-2">
          <strong>{name}</strong>
        </p>
        <div className=" text-center">
          <p className="heading-text text-md p-2">
            <strong>{price}</strong>
          </p>
          <p className="heading-text text-lg p-2">{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Hot;
