import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "@/components/CommonCard";
import RelProductData from "../../utils/products-demo";
import ProductCatalog from "../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";
import { menuItem } from "@/utils/menu-item";

import { useRouter } from "next/router";

import { getProductByBrandName } from "../../utils/menu-item";

const BrandName = () => {
  const [products, setProducts] = useState(RelProductData);

  const router = useRouter();
  const productTitle = router.query;
  const product = getProductByBrandName(menuItem, productTitle);

  interface ProductItem {
    id: number;
    name: string;
    image: [];
    percentage: string;
    unit: string;
    price: number;
    MOQ: string;
    // add other properties if necessary
  }

  return (
    <div className="relative md:grid grid-cols-4 gap-[10px] top-36 md:top-48 md:grid-cols-4 w-full h-auto mb-10">
      <div className="col-span-1 bg-white">
        <h4 className=" mb-2 text-primary-red pt-5 px-5">
          <span>Filters</span>
        </h4>
        <hr className="h-[2px] bg-secondary" />
        <div className="pt-5 pl-5">
          <p className="text-lg font-bold">
            Related {product && product.details ? "Products" : "Categories"}
          </p>
          {product && product.details
            ? product.details.map((item: any, index: any) => {
                return <p className="text-lg pl-5">{item.name}</p>;
              })
            : product &&
              product.submenu.map((item: any) => (
                <p className="text-lg pl-5">{item.title}</p>
              ))}
        </div>
      </div>
      {product && (
        <div className="col-span-3">
          <h2 className=" mb-2 text-primary-red">
            <span>{product.title}</span>
          </h2>
          <hr className="h-[2px] bg-secondary" />
          <div className="flex justify-start flex-wrap h-auto pt-[10px]">
            {product.details
              ? product.details.map((item: any, index: any) => {
                  return (
                    <Link href={`/product/${item.id}`} className="pr-5">
                      <CommonCard key={index} product={item} />
                    </Link>
                  );
                })
              : product.submenu.map((singleProduct: any, index: any) => {
                  return singleProduct.details.map((item: any, index: any) => {
                    return (
                      <Link href={`/product/${item.id}`}>
                        <CommonCard key={index} product={item} />
                      </Link>
                    );
                  });
                })}
          </div>
        </div>
      )}
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
