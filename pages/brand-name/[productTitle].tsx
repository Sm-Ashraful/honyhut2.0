import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "@/components/CommonCard";
import { menuItem } from "@/utils/menu-item";

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

  useEffect(() => {
    console.log(" That Products: ", product);
  }, [product]);

  return (
    <div className="relative top-36 md:top-52 md:px-4">
      <div className="md:grid md:grid-cols-4 w-full md:gap-[10px] h-full relative">
        <div className="w-full  md:mr-0 md:block ">
          <FilterProducts />
        </div>
        <section className="col-span-3 relative w-full">
          <div className="px-4 text-xl bg-white py-[12px] flex md:px-5 justify-between items-center shadow-md">
            <div className="flex justify-center items-center">
              <p className="mb-0  text-xl font-bold">
                <FaHome className="text-secondary" />
              </p>
              <p className="last:font-bold">
                {path.map((linkName) => {
                  return (
                    <span>
                      <span className="mx-2"> {"/"} </span>{" "}
                      <span className="capitalize ">{linkName}</span>
                    </span>
                  );
                })}
              </p>
            </div>
            <div>
              <p className="text-sm md:text-lg">
                Showing All {product.items.length} products
              </p>
            </div>
          </div>
          <div className="px-[5px]">
            {product && (
              <div className="col-span-3">
                <h2 className=" mb-2 text-primary-red flex justify-between items-center">
                  <span>{product.title}</span>
                  <span className="flex text-sm gap-[5px] items-center pr-2">
                    <span>Search</span>
                    <span>
                      <FaSearch />
                    </span>
                  </span>
                </h2>
                <hr className="h-[2px] bg-secondary" />
                <div className="grid grid-cols-2 md:grid-cols-4 h-auto gap-[10px] py-5">
                  {product.items
                    ? product.items.map((item: any, index: any) => {
                        return (
                          <Link href={`/product/${item.id}`} className="">
                            <CommonCard key={index} product={item} />
                          </Link>
                        );
                      })
                    : product.submenu.map((singleProduct: any, index: any) => {
                        return singleProduct.details.map(
                          (item: any, index: any) => {
                            return (
                              <Link href={`/product/${item.id}`}>
                                <CommonCard key={index} product={item} />
                              </Link>
                            );
                          }
                        );
                      })}
                </div>
              </div>
            )}
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
