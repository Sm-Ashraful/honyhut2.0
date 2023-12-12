//updated code for new interface
import HeroSection from "../components/Home/partials/HeroSection";
import MultiProductFields from "../components/Home/partials/MultiProductFields";
import NewProducts from "../components/Home/partials/NewProducts";
import ReadyToShip from "../components/Home/partials/ReadyToShip";
import UserForm from "../components/Home/partials/userForm";
import FeatureCategories from "../components/Home/partials/FeatureCategories";
import { fetchData } from "@/utils/helper/fetchData";

import { useSelector, useDispatch } from "react-redux";

export async function getStaticProps() {
  const { products, categories } = await fetchData();
  return {
    props: {
      products,
      categories,
    },
  };
}

export default function Home({ products, categories }) {
  const dispatch = useDispatch();
  console.log("products: ", products);

  return (
    <>
      <main>
        <HeroSection newProducts={products} categories={categories} />
        <MultiProductFields products={products} />
        <NewProducts newProducts={products} />
        <ReadyToShip />
        <UserForm />
        <FeatureCategories />
      </main>
    </>
  );
}
