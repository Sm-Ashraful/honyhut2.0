"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`w-full h-auto cursor-pointer group`}>
      <div
        className={`w-full h-full  ${props.type === "flex" ? "flex" : ""}`}
        style={props.style}
      >
        <div
          className={`${
            props.type === "flex" ? (isMobile ? "w-1/3" : "w-1/2") : "w-full"
          }  relative mr-[16px] bg-[#f3f3f3] bg-blend-multiply`}
        >
          <img className="object-cover" src={props.image} alt={props.name} />
        </div>
        <div className={`${isMobile && "w-1/2"}`}>
          {props.type === "flex" ? (
            <p className="text-[#666] pb-1.5 text-sm group-hover:text-primary-red">
              {props.name.length > 28
                ? props.name.slice(0, 28) + "..."
                : props.name}
            </p>
          ) : null}
          <p
            className={`text-black font-semibold pb-1.5 group-hover:text-primary-red ${props.position}`}
          >
            {props.price}
          </p>
          <p
            className={`text-[#666] text-sm ${props.position} group-hover:text-primary-red`}
          >
            {props.MOQ}(MOQ)
          </p>
          {props.type === "flex" && isMobile ? (
            <p
              className={`text-[#666] text-sm ${props.position} group-hover:text-primary-red`}
            >
              {props.s_desc && props.s_desc.slice(0, 120)}...
            </p>
          ) : null}

          <p
            className={`text-[#666] text-sm ${props.position} group-hover:text-primary-red`}
          >
            {props.typo && props.typo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
