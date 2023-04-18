import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "@/components/CommonCard";
import RelProductData, {
  getProductByIdSecond,
} from "../../utils/products-demo";
import ProductCatalog from "../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";
import people from "../../utils/fav-demo-data";

import { useRouter } from "next/router";

import { getProductById } from "../../utils/products";
import { getProductByIdThird } from "@/utils/fav-demo-data";

const Product = () => {
  const [products, setProducts] = useState(RelProductData);
  let product;

  const router = useRouter();
  const productId = router.query.productId;

  if (productId) {
    product = getProductById(productId);
  }

  if (!product) {
    return <div className="w-screen h-screen text-center">Loading...</div>;
  }

  return (
    <div className="relative grid  top-36 md:top-48 md:grid-cols-4">
      {product && (
        <div
          className="md:border-r border-gray dark:border-b-gray md:col-span-3"
          id="mainElement"
        >
          <ProductCatalog product={product} />
          <RecommendProduct
            top={`0`}
            className={false}
            products={people}
            title={"Recommand For You"}
          />
        </div>
      )}
      {/* you may also like section*/}
      <aside
        className="md:col-span-1 my-5 md:my-0 md:mb-1 md:flex flex-col padding_inside items-center"
        id="asideElement"
      >
        <h2 className="md:text-center text-primary-red shadow-md font-bold w-full">
          <span>Related Product</span>
        </h2>

        <div className="grid grid-cols-2  gap-[10px] md:grid-cols-1 w-full">
          {products.map((item, index) => {
            if (index < 5) {
              return (
                <Link href={`/product/${item.id}`}>
                  <CommonCard key={index} product={item} />
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
