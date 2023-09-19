import { useState, useEffect } from "react";

import Head from "next/head";
import ImageSlider from "../components/heroSlider/slider";
import Categories from "../components/Categories";
import Products from "../components/products";
import Women from "../components/products/womenSec";
import Gallery from "../components/gallery";
import RecommandForYou from "../components/RecommandForYou";
import { MaleEnhancement } from "../utils/male";

//updated code for new interface
import HeroSection from "../components/Home/partials/HeroSection";
import MultiProductFields from "../components/Home/partials/MultiProductFields";
import NewProducts from "../components/Home/partials/NewProducts";
import ReadyToShip from "../components/Home/partials/ReadyToShip";
import UserForm from "../components/Home/partials/userForm";
import FeatureCategories from "../components/Home/partials/FeatureCategories";

import people from "../utils/fav-demo-data";
import { allProducts } from "@/utils/products";
import getNewArrival from "@/utils/helper/getNewProducts";
import Review from "@/components/review";

import { useDispatch } from "react-redux";

import axios from "@/utils/helper/axios";

export async function getServerSideProps() {
  // const dispatch = useDispatch();

  const res = await axios.get("/category/getcategory");
  if (res.status === 200) {
    const { categoryList } = res.data;

    return {
      props: {
        categoryList,
      },
    };
  } else {
    return {
      props: {
        error: res.data.error,
      },
    };
  }
}

export default function Home({ categoryList }) {
  const newProducts = getNewArrival(allProducts);

  return (
    <>
      <main>
        {/** <ImageSlider /> */}
        <HeroSection />
        {/**<Categories categories={categoryList} /> */}
        <MultiProductFields />
        {/** <RecommandForYou
          top={false}
          className={false}
          products={newProducts}
          title={`Trending Royal Honey`}
        /> */}
        <NewProducts />
        {/** <Products /> */}

        <ReadyToShip />
        {/** <RecommandForYou
          top={false}
          className={false}
          products={newProducts}
          title={`New Best Items`}
        />*/}
        <UserForm />
        <FeatureCategories />
      </main>
    </>
  );
}
