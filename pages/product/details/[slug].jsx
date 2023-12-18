import ProductCatalog from "../../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";
import people from "../../../utils/fav-demo-data";

import axiosInstance from "@/utils/helper/axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getServerSideProps = async (context) => {
  // Get the productId from the URL parameter
  const slug = context.params.slug;
  // Fetch data from the database using the productId
  const res = await axiosInstance.get(`/product/id/${slug}`);
  const product = await res.data.product;

  return {
    props: { product },
  };
};

const ProductPage = ({ product }) => {
  const [recommendForYou, setRecommendForYou] = useState(null);

  useEffect(() => {
    async function fetchRecommendProduct() {
      const recommendRes = await axiosInstance.get(
        `/recommend/get-recommend-products?categoryId=${product.category}`
      );
      setRecommendForYou(recommendRes.data.recommendedProducts);
    }
    fetchRecommendProduct();
  }, []);
  if (!product) {
    return <div className="w-screen h-screen text-center">Loading...</div>;
  }

  return (
    <div className="relative w-full">
      <div className="padding_inside bg-white ">
        <ProductCatalog product={product} />
        {recommendForYou && (
          <RecommendProduct
            title="Recommend for you"
            products={recommendForYou}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
