import React from "react";

import { readyToShip } from "@/utils/New Data/Ptoducts";
import CardWithButton from "@/components/Update/CardWithButton";
import Link from "next/link";

export default function Product() {
  return (
    <div className="grid grid-cols-4 gap-5 padding_inside">
      {readyToShip.map((item, idx) => {
        return (
          <Link href={`/product/${idx + 5}`}>
            <CardWithButton
              key={idx}
              image={item.image[0]}
              name={item.name}
              MOQ={item.MOQ}
              price={item.price}
              style={{
                flex: `0 0 calc(${100 / 4}% - 30px)`, // Adjust the '10px' as the desired gap
                margin: "5px", // Adjust the margin as needed
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: "7px",
              }}
            />
          </Link>
        );
      })}
    </div>
  );
}
