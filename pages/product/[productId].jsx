import React, { useState } from "react";
import RelProductData from "../../utils/products-demo";
import ProductCatalog from "../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";
import people from "../../utils/fav-demo-data";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { usePathname } from "next/navigation";

import axiosInstance from "@/utils/helper/axios";

export const getServerSideProps = async (context) => {
  // Get the productId from the URL parameter
  const productId = context.params.productId;
  // Fetch data from the database using the productId
  const res = await axiosInstance.get(`/product/id/${productId}`);
  const product = await res.data;
  return { props: { product } };
};

const Product = ({ product }) => {
  // const [product, setProduct] = useState(null);
  console.log("Product: ", product);

  if (!product) {
    return <div className="w-screen h-screen text-center">Loading...</div>;
  }

  return (
    <div className="relative w-full">
      <div className="padding_inside bg-white">
        <ProductCatalog product={product.product} />
        <RecommendProduct
          top={"0"}
          className={false}
          products={people}
          title={"Recommand For You"}
        />
      </div>

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
