import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftRightArrow from "../common/LeftRightArrow";

import styles from "./slider.module.css";

const PhotoSlider = ({ data, delayTime }) => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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
        const { id, image, name } = person;
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
            key={id}
          >
            <Link href={`/allproducts`}>
              <Image
                src={image}
                alt={name}
                fill
                cover
                className={styles.person_img}
              />
            </Link>
          </article>
        );
      })}
      <div class="absolute -bottom-[45px] left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {Array.from({ length: data.length }, (_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`mx-[5px]  h-[8px] w-[8px] sm:w-[12px] sm:h-[12px] rounded-full cursor-pointer border border-solid border-red-800 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] motion-reduce:transition-none ${
              index === i && "bg-honey border-none"
            }`}
          ></span>
        ))}
      </div>
      <div className="hidden">
        <LeftRightArrow setIndex={setIndex} index={index} />
      </div>
    </div>
  );
};

export default PhotoSlider;
