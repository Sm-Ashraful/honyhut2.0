import ProductCatalog from "../../components/product-catalog";
import RecommendProduct from "@/components/RecommandForYou";
import people from "../../utils/fav-demo-data";

import axiosInstance from "@/utils/helper/axios";

export const getServerSideProps = async (context) => {
  // Get the productId from the URL parameter
  const productId = context.params.productId;
  // Fetch data from the database using the productId
  const res = await axiosInstance.get(`/product/id/${productId}`);
  const product = await res.data;
  return { props: { product } };
};

const ProductPage = ({ product }) => {
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
    </div>
  );
};

export default ProductPage;
