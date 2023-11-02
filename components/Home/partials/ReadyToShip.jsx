import React from "react";
import CardWithButton from "../../Update/CardWithButton";

import { readyToShip } from "@/utils/New Data/Ptoducts";
import Link from "next/link";

const ReadyToShip = () => {
  return (
    <div className="w-full relative md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <div className="w-full flex flex-col md:flex-row gap-5 bg-white overflow-hidden rounded-lg">
        <div className="w-full md:w-1/5   relative group gap-5">
          <img
            src="/new/rto_home.jpg"
            alt=""
            className="w-full h-full object-cover transition-transform transform hidden md:block"
          />
          <div className="w-full flex flex-col justify-center items-center pt-5 md:absolute top-5 md:left-1/2 md:-translate-x-1/2">
            <h3 className=" text-black md:text-white">Ready To Ship</h3>
            <button className="px-5 py-2 rounded-full bg-white text-red-400">
              View More
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-5 opacity-0 group-hover:bg-opacity-5  transition-transform transform "></div>
          <div className="absolute bottom-0 right-0 w-full h-3/5  opacity-0 group-hover:opacity-70 backdrop-blur-md transition-transform transform "></div>
          <p className="absolute bottom-0 text-center left-0 w-full h-full text-white text-sm px-2 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            In-stock goods are ready to be dispatched from our B2B wholesale
            marketplace right after orders are placed.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-5">
          {readyToShip.slice(0, 4).map((item, idx) => {
            return (
              <Link href={`/product/${idx + 5}`}>
                <CardWithButton
                  key={idx}
                  image={item.image[0]}
                  name={item.name}
                  MOQ={item.MOQ}
                  price={item.price}
                  style={{
                    // Adjust the '10px' as the desired gap
                    margin: "5px", // Adjust the margin as needed
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReadyToShip;
