import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./style.module.css";

const LeftRightArrow = ({ setIndex, index }) => {
  const handlePreviousClick = (e) => {
    e.preventDefault();
    setIndex(index - 1);
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    setIndex(index + 1);
  };
  return (
    <div>
      <button className={styles.prev} onClick={handlePreviousClick}>
        <FiChevronLeft />
      </button>
      <button className={styles.next} onClick={handleNextClick}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default LeftRightArrow;
