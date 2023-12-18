import React from "react";
import OfferPercent from "../offer";
import Image from "next/image";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CardWithButton = (props) => {
  return (
    <div style={props.style}>
      <div className={`w-full h-full relative`}>
        <div className="w-full flex justify-center h-[180px] bg-customTheme/10 bg-blend-multiply">
          <div
            className={`w-3/4 flex justify-center relative bg-blend-multiply mb-5`}
          >
            <Image
              className="object-contain"
              src={props.image}
              alt={props.name}
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="px-4 pb-4 pt-3">
          {
            <p className="text-[#666] pb-1.5 text-sm min-h-[50px]">
              {props.name.length > 50
                ? capitalize(props.name.slice(0, 50).toLowerCase()) + "..."
                : capitalize(props.name.toLowerCase())}
            </p>
          }
          <p className={`text-red-600 font-semibold pb-1.5 `}>
            USD ${props.price} <span className="text-gray-500">/box</span>
          </p>
          {props.details?.Offer && (
            <div className={`absolute  -left-[5px] rounded-sm  b_anim`}>
              <OfferPercent percentage={props.details?.Offer} />
            </div>
          )}
          <p className={`text-[#666] text-sm `}>{props.details?.Unit}</p>
          <div className="mx-2 pt-3">
            <button className="pb-2 w-full border border-[#666] rounded-full mx-auto text-center px-5 py-2 bg-customTheme hover:bg-white text-customText hover:text-customTheme">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithButton;
