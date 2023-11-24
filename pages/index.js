import { useState, useEffect } from "react";

//updated code for new interface
import HeroSection from "../components/Home/partials/HeroSection";
import MultiProductFields from "../components/Home/partials/MultiProductFields";
import NewProducts from "../components/Home/partials/NewProducts";
import ReadyToShip from "../components/Home/partials/ReadyToShip";
import UserForm from "../components/Home/partials/userForm";
import FeatureCategories from "../components/Home/partials/FeatureCategories";

import axiosInstance from "@/utils/helper/axios";

export async function getStaticProps() {
  const res = await axiosInstance.get("/products/slug/Fake-API-l2CLVFVGpz");

  const newProducts = await res.data.products;

  return {
    props: {
      newProducts,
    },
  };
}

export default function Home({ newProducts }) {
  return (
    <>
      <main>
        <HeroSection newProducts={newProducts} />
        <MultiProductFields products={newProducts} />

        <NewProducts newProducts={newProducts} />

        <ReadyToShip />

        <UserForm />
        <FeatureCategories />
      </main>
    </>
  );
}
