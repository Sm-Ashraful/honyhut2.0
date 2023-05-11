import React, { useState, useEffect } from "react";
import data from "../../utils/data-demo";
import PhotoSlider from "./photo-slider";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <section
      className={`w-full  relative top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem] md:px-[4rem]   flex justify-center`}
    >
      <div className={` ${styles.section_slider} flex justify-center`}>
        <div className={`${styles.section_center}  flex-1`}>
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
