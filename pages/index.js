import { useState, useEffect } from "react";

import Head from "next/head";
import ImageSlider from "../components/heroSlider/slider";
import Categories from "../components/Categories";
import Products from "../components/products";
import Women from "../components/products/womenSec";
import Gallery from "../components/gallery";
import RecommandForYou from "../components/RecommandForYou";
import { MaleEnhancement } from "../utils/male";

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

  console.log("App Category list: ", categoryList);

  return (
    <>
      <main>
        <ImageSlider />
        <Categories categories={categoryList} />
        <RecommandForYou
          top={false}
          className={false}
          products={newProducts}
          title={`Trending Royal Honey`}
        />
        <Products />
        <RecommandForYou
          top={false}
          className={false}
          products={newProducts}
          title={`New Best Items`}
        />

        <RecommandForYou
          top={false}
          className={false}
          products={people}
          title={`Just For You`}
        />
        <Women />
        <RecommandForYou
          top={false}
          className={false}
          products={MaleEnhancement[2].products}
          title={`Enhancement Pills`}
        />

        <Gallery />
        <Review />
      </main>
    </>
  );
}
