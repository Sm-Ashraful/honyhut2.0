import Head from "next/head";
import ImageSlider from "../components/heroSlider/slider";
import Categories from "../components/Categories";
import Products from "../components/products";
import Women from "../components/products/womenSec";
import Gallery from "../components/gallery";
import RecommandForYou from "../components/RecommandForYou";
import { MaleEnhancement } from "../utils/male";

import people from "../utils/fav-demo-data";

export default function Home() {
  return (
    <>
      <main>
        <ImageSlider />
        <Categories />
        <Products />
        <RecommandForYou
          top={0}
          className={false}
          products={MaleEnhancement[0].products}
          title={`Honey`}
        />

        <RecommandForYou
          top={0}
          className={false}
          products={people}
          title={`Just For You`}
        />
        <RecommandForYou
          top={0}
          className={false}
          products={MaleEnhancement[2].products}
          title={`Sex Pills`}
        />

        <Women />
        <Gallery />
      </main>
    </>
  );
}
