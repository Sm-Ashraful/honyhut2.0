import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftRightArrow from "../common/LeftRightArrow";

import styles from "./slider.module.css";

import { sliderData } from "@/utils/New Data/sliderData";

const PhotoSlider = () => {
  const [people, setPeople] = useState(sliderData);
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  let delayTime = 5000;

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, delayTime);
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    const handleTouch = () => {
      if (touchEndX - touchStartX > 50) {
        setIndex(index - 1);
      } else if (touchStartX - touchEndX > 50) {
        setIndex(index + 1);
      }
    };
    if (touchEndX) {
      handleTouch();
      setTouchEndX(0);
    }
  }, [touchEndX, touchStartX, index]);

  return (
    <div>
      {people.map((person, personIndex) => {
        const { image } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => setTouchEndX(e.changedTouches[0].clientX)}
            className={`${styles[position]} duration-700`}
            key={personIndex}
          >
            <Link href={`/allproducts`}>
              <Image
                src={image}
                alt={"SLIDER PHOTO"}
                fill
                cover
                className={styles.person_img}
              />
            </Link>
          </article>
        );
      })}

      <div className="hidden">
        <LeftRightArrow setIndex={setIndex} index={index} />
      </div>
    </div>
  );
};

export default PhotoSlider;
