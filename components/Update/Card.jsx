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
          }  relative mr-[16px] bg-[#f3f3f3] bg-blend-multiply max-h-[220px] overflow-hidden`}
        >
          <Image
            width={200}
            height={200}
            className="object-cover w-full h-full"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={`${isMobile && "w-1/2"}`}>
          <p
            className={`text-[#666] pb-1.5 text-sm group-hover:text-primary-red ${
              props.type === "flex" ? "" : "pt-3"
            }`}
          >
            {props.name.length > 40
              ? props.name.slice(0, 40) + "..."
              : props.name}
          </p>

          <p
            className={`text-black font-semibold pb-1.5 group-hover:text-primary-red ${props.position}`}
          >
            USD ${props.price}
          </p>

          {props.type === "flex" && isMobile ? (
            <p
              className={`text-[#666] text-sm ${props.position} group-hover:text-primary-red`}
            >
              {props.s_desc && props.s_desc.slice(0, 120)}...
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
