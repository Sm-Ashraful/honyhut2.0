import React from "react";
import HeroBanner from "../../../components/Update/HeroBanner";
import CategorySlider from "../components/categorySlider";
import Product from "../components/Product";
import { fetchCategoryData, fetchProductData } from "@/utils/helper/fetchData";

export async function getServerSideProps(context) {
  let categoryData = null;
  let childCategories = null;

  try {
    const category = encodeURIComponent(context.params.categorySlug);
    categoryData = await fetchCategoryData(category);

    // Fetch product data for the parent category
    // productData = await fetchProductData(categoryData._id);

    // Fetch child categories
    childCategories = categoryData.childCategories || [];

    // Fetch product data for each child category
    for (const childCategory of childCategories) {
      const childProductData = await fetchProductData(childCategory._id);
      childCategory.products = childProductData;
    }
    const productData = [
      ...childCategories.map((child) => child.products),
    ].flat();
    return {
      props: {
        categoryData,
        childCategories,
        productData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { categoryData, productData },
    };
  }
}

export default function LandingPage({ childCategories, productData }) {
  return (
    <div className="relative bg-[#2c3141]">
      <HeroBanner />
      <CategorySlider categories={childCategories} />
      <Product products={productData} />
    </div>
  );
}
