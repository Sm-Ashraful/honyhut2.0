import React, { useState, useEffect } from "react";
import Link from "next/link";

import data from "../../utils/data-demo";

import LeftSection from "./leftSection";
import PhotoSlider from "./photo-slider";

import {
  setHeroContentInView,
  setIsDropdownVisible,
} from "@/Store/slices/globalSlice";

import styles from "./slider.module.css";
import { useDispatch } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const heroContent = document.getElementsByClassName("hero-content");

    function isHeroContentInView() {
      if (heroContent) {
        const heroContentTop = heroContent[0].offsetTop;
        const heroContentBottom = heroContentTop + heroContent[0].offsetHeight;
        const viewportTop = window.pageYOffset;
        const viewportBottom = viewportTop + window.innerHeight;

        return (
          heroContentTop <= viewportBottom && heroContentBottom >= viewportTop
        );
      }
      return false;
    }

    function handleScroll() {
      const isHeroInView = isHeroContentInView();
      dispatch(setHeroContentInView(isHeroInView));
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <section className={`w-full  relative top-36 md:top-52`}>
      <div
        className={` ${styles.section_slider} flex justify-center md:space-x-5 md:padding_inside`}
      >
        {/* left section */}
        <div className="w-1/5 hidden md:block hero-content">
          <LeftSection />
        </div>

        {/* middle heroslide section */}
        <div className={`${styles.section_center}  flex-1`}>
          <PhotoSlider data={data} delayTime="5000" />
        </div>

        {/* right section */}
      </div>
    </section>
  );
};

export default Slider;

// This section is for, when i use backend fatch api

// export async function getStaticProps() {
//   const res = await fetch("../../utils/data-demo.json");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
