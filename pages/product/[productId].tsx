import React, { useState, useEffect } from "react";

import RelProduct from "../../components/Card";
import RelProductData from "../../utils/products-demo";
import ProductCatalog from "../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";

import { useRouter } from "next/router";

import { getProductById } from "../../utils/products-demo";

const Product = () => {
  const [products, setProducts] = useState(RelProductData);

  const router = useRouter();
  const productId = router.query.productId;
  const product = getProductById(productId);

  if (!product) {
    return <div className="w-screen h-screen text-center">Loading...</div>;
  }

  return (
    <div className="relative grid  top-36 md:top-48 grid_cols_5">
      <div
        className="md:border-r border-gray dark:border-b-gray"
        id="mainElement"
      >
        <ProductCatalog props={product} />
      </div>

      {/* you may also like section*/}

      <aside
        className="my-5 md:flex flex-col justify-center items-center"
        id="asideElement"
      >
        <h2 className="text-center text-secondary shadow-sm font-bold">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
          {products.map((item, index) => {
            if (index < 4) {
              return (
                <RelProduct
                  key={index}
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  quote={item.quote}
                  quantity={item.quantity}
                  price={item.price}
                  categoryType={`products`}
                  percentage={`20%`}
                />
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
