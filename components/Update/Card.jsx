import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <div className={`w-full h-auto`}>
      <div
        className={`w-full h-full  ${props.type === "flex" ? "flex" : ""}`}
        style={props.style}
      >
        <div
          className={`${
            props.type === "flex" ? "w-1/2" : "w-full"
          }  relative mr-[16px] bg-[#f3f3f3] bg-blend-multiply`}
        >
          <img className="object-cover" src={props.image} alt={props.name} />
        </div>
        <div>
          {props.type === "flex" ? (
            <p className="text-[#666] pb-1.5 text-sm">
              {props.name.length > 28
                ? props.name.slice(0, 28) + "..."
                : props.name}
            </p>
          ) : null}
          <p className={`text-black font-semibold pb-1.5 ${props.position}`}>
            {props.price}
          </p>
          <p className={`text-[#666] text-sm ${props.position}`}>
            {props.MOQ}(MOQ)
          </p>

          <p className={`text-[#666] text-sm ${props.position}`}>
            {props.typo && props.typo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
