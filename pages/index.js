import { useState, useEffect } from "react";

//updated code for new interface
import HeroSection from "../components/Home/partials/HeroSection";
import MultiProductFields from "../components/Home/partials/MultiProductFields";
import NewProducts from "../components/Home/partials/NewProducts";
import ReadyToShip from "../components/Home/partials/ReadyToShip";
import UserForm from "../components/Home/partials/userForm";
import FeatureCategories from "../components/Home/partials/FeatureCategories";

import { useDispatch } from "react-redux";

import axios from "@/utils/helper/axios";
import axiosInstance from "@/utils/helper/axios";

// export async function getServerSideProps() {
//   // const dispatch = useDispatch();

//   const res = await axios.get("/category/getcategory");
//   if (res.status === 200) {
//     const { categoryList } = res.data;

//     return {
//       props: {
//         categoryList,
//       },
//     };
//   } else {
//     return {
//       props: {
//         error: res.data.error,
//       },
//     };
//   }
// }

export async function getStaticProps() {
  const res = await axiosInstance.get("/products/Fake-API-l2CLVFVGpz");

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

        <NewProducts />

        <ReadyToShip />

        <UserForm />
        <FeatureCategories />
      </main>
    </>
  );
}
