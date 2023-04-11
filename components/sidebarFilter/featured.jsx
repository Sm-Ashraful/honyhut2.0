import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { FaTimes } from "react-icons/fa";

import { shortPosition } from "@/Store/slices/globalSlice";

const FeaturedPage = () => {
  const isShortOpen = useSelector((state) => state.sidebar.isShortOpen);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCloseButton = (event) => {
    event.stopPropagation();
    dispatch(shortPosition());
  };

  return (
    <div
      className={` ${
        isShortOpen
          ? `${styles.shortBy_container} ${styles.shortBy_container_show}`
          : `${styles.shortBy_container}`
      } px-3 pt-5 z-50`}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex w-full">
          <span className="font-semibold text-2xl w-full">SORT BY:</span>
        </div>
        <div
          className="absolute w-[25px] h-[25px] top-3 right-2 text-primary-red text-2xl"
          onClick={handleCloseButton}
        >
          <FaTimes />
        </div>
        {/* Filter section  */}
        <div className="flex flex-col mb-10 p-4 text-black">
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 "
              name="filterOption"
            />
            <span className="ml-2  hover:text-honey">Featured</span>
          </label>
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 "
              name="filterOption"
            />
            <span className="ml-2  hover:text-honey">Best Selling</span>
          </label>
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 "
              name="filterOption"
            />
            <span className="ml-2  hover:text-honey">
              Alphabetically, A - Z
            </span>
          </label>
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 "
              name="filterOption"
            />
            <span className="ml-2  hover:text-honey">
              Alphabetically, Z - A
            </span>
          </label>
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 "
              name="filterOption"
            />
            <span className="ml-2  hover:text-honey">Price, low to high</span>
          </label>
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 "
              name="filterOption"
            />
            <span className="ml-2  hover:text-honey">Price, high to low</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default FeaturedPage;
