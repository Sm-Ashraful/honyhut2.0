import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import LeftRightArrow from "../common/LeftRightArrow";

import styles from "./slider.module.css";

const PhotoSlider = ({ data, delayTime }) => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

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
          <article className={`${styles[position]} duration-700`} key={id}>
            <Image
              src={image}
              alt={name}
              fill
              cover
              className={styles.person_img}
            />
          </article>
        );
      })}
      <LeftRightArrow setIndex={setIndex} index={index} />
    </div>
  );
};

export default PhotoSlider;
