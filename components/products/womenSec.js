// **Women Products Section
// **Developed by Dev-2(Mehedi Hasan Munna)

import React, { useState } from "react";
import Card from "../Card";
import productData from "../../utils/products-demo";
import Link from "next/link";
import ByMoreSection from "./buyMore";
import CommonCard from "../CommonCard";

import pill1 from "../../public/Products/Pills/Pandora-for-Women-Front-Side.jpg";
import pill2 from "../../public/Products/Pills/Spanish-fly-22000-Front-Side-Red.jpg";
import pill3 from "../../public/Products/Pills/Zesus-250k-Front-Side.jpg";
import pill4 from "../../public/Products/Pills/Bullet-3000-Front-Side.jpg";
import pill5 from "../../public/Products/Pills/Rhino-69-1200k-Front-Side.jpg";
import pill6 from "../../public/Products/Pills/Magnum-Gold-1000k-Gold-Side.jpg";

const Women = () => {
  const [product, setProduct] = useState(productData);
  return (
    <div className="relative top-36 md:top-48 grid md:grid-cols-2">
      <section className="padding_inside w-full h-128 overflow-auto">
        <div className="flex justify-between items-center md:flex-col md:justify-start md:items-start">
          <h2 className="mb-0">For Women</h2>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            <Link href="#">
              <button className="text-2xl  text-gray hover:text-honey hover:underline active">
                Pill
              </button>
            </Link>
            <Link href="#">
              <button className=" text-2xl text-gray hover:text-honey hover:underline">
                Liquid Shots
              </button>
            </Link>
          </div>
        </div>
        <hr className="h-px mb-5  bg-gray border-0 dark:bg-gray" />
        <div className="relative">
          <div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 sm:grid-cols-3">
              {productData.map((items, index) => {
                return (
                  <Link href={`/product/${items.id}`}>
                    <CommonCard
                      key={index}
                      product={items}
                      percentage={`Hot`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="padding_inside w-full h-128 overflow-hidden">
        <h2 className="pt-2 md:pb-3">Buy More Save More</h2>
        <hr className="h-px mb-5  bg-gray border-0 dark:bg-gray" />
        <div className="w-full h-96 md:h-4/5">
          <ByMoreSection />
        </div>
      </section>
    </div>
  );
};

export default Women;
