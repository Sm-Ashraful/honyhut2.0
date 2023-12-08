import React from "react";
import HeroBanner from "../../../components/Update/HeroBanner";
import CategorySlider from "../components/categorySlider";
import Product from "../components/Product";
import axiosInstance from "@/utils/helper/axios";

import { useSelector } from "react-redux";

export async function getServerSideProps(context) {
  try {
    const categorySlug = context.params.categorySlug;
    const response = await axiosInstance.get(`/products/slug/${categorySlug}`);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {},
    };
  }
}

export default function LandingPage({ data }) {
  const state = useSelector((state) => state);
  console.log("Categories: ", state);

  return (
    <div className="relative bg-[#2c3141]">
      <HeroBanner />
      <CategorySlider />
      <Product />
    </div>
  );
}
