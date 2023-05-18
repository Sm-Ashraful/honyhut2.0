import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "@/components/CommonCard";

import FilterProducts from "@/components/all-products";

import { useRouter } from "next/router";

import { getProductByBrandName } from "../../utils/all-product";
import { allProducts } from "@/utils/all-product";

import { FaHome, FaSearch } from "react-icons/fa";
import HeroTop from "@/components/common/top-component";

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
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem]">
      <HeroTop title={product.title} />
      <div className="padding_inside">
        <div className="w-full  md:mr-0 md:block z-0 pt-[20px]">
          <FilterProducts />
        </div>
        <div className="md:grid md:grid-cols w-full md:gap-[10px] h-full relative">
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
