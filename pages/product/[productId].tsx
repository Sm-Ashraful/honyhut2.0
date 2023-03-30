import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "@/components/CommonCard";
import RelProductData from "../../utils/products-demo";
import ProductCatalog from "../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";

import { useRouter } from "next/router";

import { getProductById } from "../../utils/menu-item";

const Product = () => {
  const [products, setProducts] = useState(RelProductData);

  const router = useRouter();
  const productId = router.query.productId;
  const product = getProductById(productId);

  if (!product) {
    return <div className="w-screen h-screen text-center">Loading...</div>;
  }

  return (
    <div className="relative grid  top-36 md:top-48 md:grid-cols-4">
      <div
        className="md:border-r border-gray dark:border-b-gray md:col-span-3"
        id="mainElement"
      >
        <ProductCatalog props={product} />
        <RecommendProduct top={`0`} className={false} />
      </div>

      {/* you may also like section*/}

      <aside
        className="md:col-span-1 my-5 md:flex flex-col padding_inside items-center"
        id="asideElement"
      >
        <h2 className="md:text-center text-primary-red shadow-sm font-bold">
          Related Product
        </h2>

        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-2">
          {products.map((item, index) => {
            if (index < 8) {
              return (
                <Link href={`/product/${item.id}`}>
                  <CommonCard key={index} product={item} percentage={`20%`} />
                </Link>
              );
            }
          })}
        </div>
      </aside>
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

export default Product;
