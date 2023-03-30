import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import data from "../../utils/data-demo";

import DropdownNavbar from "../navbar";
import PhotoSlider from "./photo-slider";

import {
  setHeroContentInView,
  setIsDropdownVisible,
} from "@/Store/slices/globalSlice";

import styles from "./slider.module.css";
import { useDispatch } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const heroContent = document.getElementsByClassName("hero-content");
    function isHeroContentInView() {
      if (heroContent && heroContent[0]) {
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
    // if (router.pathname === "/") {
    //   window.addEventListener("scroll", handleScroll);
    // } else {
    //   dispatch(setHeroContentInView(true));
    // }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, router.pathname]);

  return (
    <section className={`w-full  relative top-36 md:top-52`}>
      <div
        className={` ${styles.section_slider} flex justify-center md:space-x-5 md:padding_inside hero-content`}
      >
        {/* left section */}
        <div className="w-1/5 hidden md:block ">
          <DropdownNavbar />
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
