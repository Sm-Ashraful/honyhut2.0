import React, { useState, useEffect } from "react";
import data from "../../utils/data-demo";
import PhotoSlider from "./photo-slider";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <section
      className={`w-full  relative top-[8.09rem] sm:top-[8.2rem] md:top-[9.4rem] lg:top-[9.3rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]   flex justify-center`}
    >
      <div className={` ${styles.section_slider} flex justify-center`}>
        <div className={`${styles.section_center}`}>
          <PhotoSlider data={data} delayTime="8000" />
        </div>
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
