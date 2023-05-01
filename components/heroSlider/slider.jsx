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

  return (
    <section className={`w-full  relative top-36 md:top-52 padding_inside`}>
      <div
        className={` ${styles.section_slider} flex justify-center hero-content `}
      >
        {/* left section */}

        {/* middle heroslide section */}
        <div className={`${styles.section_center}  flex-1`}>
          <PhotoSlider data={data} delayTime="8000" />
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
