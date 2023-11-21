import React from "react";
import Card from "./Card";
import Link from "next/link";

const MultiCardBox = ({
  product,
  productCategory,
  subtitle,
  type,
  position,
}) => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded-lg">
        <div>
          <div className="flex justify-between items-center pb-2">
            <h2 className="!ml-0">{productCategory}</h2>
            <p className="text-sm cursor-pointer text-[#777]">See more</p>
          </div>
          <p className="text-[#666] text-sm leading-4">{subtitle}</p>
        </div>
        <div className="flex gap-5">
          {product.slice(0, type === "multiShow" ? 3 : 4).map((item, idx) => {
            return (
              <Link href={`/product/${idx}`}>
                <Card
                  key={idx}
                  image={
                    item.image ? item.image[0] : item.productPictures[0].img
                  }
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
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MultiCardBox;
