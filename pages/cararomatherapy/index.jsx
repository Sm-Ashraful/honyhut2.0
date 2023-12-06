import React from "react";
import Image from "next/image";

import axiosInstance from "../../utils/helper/axios";

import { Products } from "../../utils/New Data/Ptoducts";
import CarCard from "./components/card";
import Link from "next/link";

export async function getStaticProps() {
  const res = await axiosInstance.get("/product/car-aroma-therapy");

  const products = await res.data.product;

  return {
    props: {
      products,
    },
  };
}

export default function CarAromaTherapy({ products }) {
  console.log("Products: ", products);
  return (
    <div className="padding_inside">
      <div className="w-full h-[380px] relative ">
        <Image src="/cararoma.jpg" fill alt="car-aroma-therapy" />
      </div>
      <div className="grid grid-cols-3 gap-x-10 py-5">
        {products.slice(0, 3).map((product, idx) => {
          return (
            <Link href={`/product/${product._id}`}>
              <CarCard product={product} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
