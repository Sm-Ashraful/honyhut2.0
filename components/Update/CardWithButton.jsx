import React from "react";

const CardWithButton = (props) => {
  return (
    <div style={props.style}>
      <div className={`w-full h-full`}>
        <div className={`w-full relative bg-[#f3f3f3] bg-blend-multiply mb-5`}>
          <img className="object-cover" src={props.image} alt={props.name} />
        </div>
        <div className="px-4 py-4">
          {
            <p className="text-[#666] pb-1.5 text-sm">
              {props.name.length > 50
                ? props.name.slice(0, 50) + "..."
                : props.name}
            </p>
          }
          <p className={`text-black font-semibold pb-1.5 `}>
            {props.price} <span className="text-gray-500">/piece</span>
          </p>
          <p className={`text-[#666] text-sm `}>
            {props.MOQ ? `${props.MOQ}(MOQ)` : ""}
          </p>
          <div className="mx-2 pt-3">
            <button className="pb-2 w-full border border-[#666] rounded-full mx-auto text-center px-5 py-2">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithButton;
