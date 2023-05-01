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

export default function Home() {
  const newProducts = getNewArrival(allProducts);

  return (
    <>
      <main>
        <ImageSlider />
        <Categories />
        <RecommandForYou
          top={0}
          className={false}
          products={newProducts}
          title={`Trending Royal Honey`}
        />
        <Products />
        <RecommandForYou
          top={0}
          className={false}
          products={newProducts}
          title={`New Best Items`}
        />

        <RecommandForYou
          top={0}
          className={false}
          products={people}
          title={`Just For You`}
        />
        <Women />
        <RecommandForYou
          top={0}
          className={false}
          products={MaleEnhancement[2].products}
          title={`Enhancement Pills`}
        />

        <Gallery />
      </main>
    </>
  );
}
