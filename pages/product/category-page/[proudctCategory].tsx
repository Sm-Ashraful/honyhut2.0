import React from "react";
import HeroBanner from "../../../components/Update/HeroBanner";
import CategorySlider from "../components/categorySlider";
import Product from "../components/Product";

// bannerImage={bannerImage}

export default function LandingPage() {
  return (
    <div className="relative bg-[#2c3141]">
      <HeroBanner />
      <CategorySlider />
      <Product />
    </div>
  );
}
