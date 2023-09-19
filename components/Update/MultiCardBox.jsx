import React from "react";
import Card from "./Card";

const MultiCardBox = ({ product, title, subtitle, type, position }) => {
  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <div>
        <div className="flex justify-between items-center pb-2">
          <h2 className="!ml-0">{title}</h2>
          <p className="text-sm cursor-pointer text-[#777]">See more</p>
        </div>
        <p className="text-[#666] text-sm leading-4">{subtitle}</p>
      </div>
      <div className="flex gap-5">
        {product.slice(0, type === "multiShow" ? 3 : 4).map((item, idx) => {
          return (
            <Card
              key={idx}
              image={item.image[0]}
              name={item.name}
              MOQ={item.MOQ}
              price={item.price}
              position={position}
              typo={item.typo}
              style={{
                flex: `0 0 calc(${
                  100 / (type === "multiShow" ? 3 : 4)
                }% - 10px)`, // Adjust the '10px' as the desired gap
                margin: "5px", // Adjust the margin as needed
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MultiCardBox;
