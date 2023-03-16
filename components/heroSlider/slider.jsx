import React, { useState, useEffect } from "react";
import Link from "next/link";

import data from "../../utils/data-demo";

import LeftSection from "./leftSection";
import PhotoSlider from "./photo-slider";

import styles from "./slider.module.css";

const Slider = () => {
  return (
    <section className={`w-full relative`}>
      <div
        className={`${styles.section_slider} flex justify-center md:space-x-5 md:padding_inside`}
      >
        {/* left section */}
        <div className="w-1/5 hidden md:block"></div>

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
