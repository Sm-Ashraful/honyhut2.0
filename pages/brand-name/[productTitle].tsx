import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "@/components/CommonCard";

import FilterProducts from "@/components/all-products";

import { useRouter } from "next/router";

import { getProductByBrandName } from "../../utils/all-product";
import { allProducts } from "@/utils/all-product";

import { FaHome, FaSearch } from "react-icons/fa";

const BrandName = () => {
  const router = useRouter();
  const productTitle = router.query;
  const product = getProductByBrandName(allProducts, productTitle);
  const pathName = router.pathname;
  const path = pathName.split("/");
  path.pop();
  if (product) {
    path.push(product.title);
  }

  return (
    <div className="relative top-36 md:top-[150px]">
      <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[10px] flex justify-start items-center shadow-md">
        <span className="mb-0 text-xxl text-white text-center w-full">
          {product.title}
        </span>
      </div>
      <div className="w-full  md:mr-0 md:block z-0 pt-[20px]  md:px-[9rem]">
        <FilterProducts />
      </div>
      <div className="md:grid md:grid-cols w-full md:gap-[10px] h-full relative md:px-[9rem]">
        <section className="col-span-3 relative w-full">
          <div className="px-[10px]">
            {product ? (
              <div className="col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-4 h-auto gap-[10px] py-5">
                  {product.items
                    ? product.items.map((item: any, index: any) => {
                        return (
                          <Link href={`/product/${item.id}`} className="">
                            <CommonCard key={index} product={item} />
                          </Link>
                        );
                      })
                    : null}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
};

// export async function getStaticProps({ params }) {
//   const productId = params.productId;
//   const product = getProductById(productId);

//   return {
//     props: {
//       product,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const paths = products.map((product) => ({
//     params: { productId: String(product.id) }, // ensure that productId is a string
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default BrandName;
