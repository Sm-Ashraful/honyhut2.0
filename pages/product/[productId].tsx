import React, { useState } from "react";
import RelProductData from "../../utils/products-demo";
import ProductCatalog from "./partials/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";
import people from "../../utils/fav-demo-data";
import HeroTop from "@/components/common/top-component";

import { useRouter } from "next/router";

import { getProductById } from "../../utils/products";
import RouteLink from "@/components/common/route-link";

const Product = () => {
  const [products, setProducts] = useState(RelProductData);
  let product;

  const router = useRouter();
  const productId = router.query.productId;
  const pathName = router.pathname;
  const path = pathName.split("/");
  const removeId = path.pop();

  if (productId) {
    product = getProductById(productId);
    product && path.push(product.name);
  }
  // if (product.category) {
  //    path.unshift(product?.categoryName);
  //    path.unshift(product?.Subcategory)
  // }

  if (!product) {
    return <div className="w-screen h-screen text-center">Loading...</div>;
  }

  return (
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem] ">
      <div className="relative">
        <div>
          <HeroTop title="" />
        </div>
        <div className="absolute md:top-0 left-0  bottom-1">
          <RouteLink path={path} background="transparent" />
        </div>
      </div>
      {product && (
        <>
          <div className="padding_inside bg-white">
            {product && (
              <>
                <ProductCatalog product={product} />
                <RecommendProduct
                  top={"0"}
                  className={false}
                  products={people}
                  title={"Recommand For You"}
                />
              </>
            )}
          </div>
        </>
      )}
      {/* you may also like section*/}
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
