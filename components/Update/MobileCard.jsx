import Image from "next/image";
import React from "react";

export default function MobileCard(props) {
  return (
    <div className={`w-full h-auto cursor-pointer group`}>
      <div className={`w-full h-full`} style={props.style}>
        <div
          className={`relative mr-[16px] bg-[#f3f3f3] bg-blend-multiply max-h-[220px] overflow-hidden`}
        >
          <Image
            width={200}
            height={200}
            className="object-cover w-full h-full"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={`pt-5`}>
          <p
            className={`text-[#666] pb-1.5 text-sm group-hover:text-primary-red`}
          >
            {props.name}
          </p>

          <p
            className={`text-black font-semibold pb-1.5 group-hover:text-primary-red ${props.position}`}
          >
            USD ${props.price}
          </p>

          <p
            className={`text-[#666] text-sm ${props.position} group-hover:text-primary-red`}
          >
            {props.MOQ}
          </p>
        </div>
      </div>
    </div>
  );
}
