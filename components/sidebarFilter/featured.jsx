import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { FaTimes } from "react-icons/fa";
import { IoFilter, IoArrowDown } from "react-icons/io5";

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
    <div class="flex justify-center items-center">
      <select className="text-sm pl-5 py-2 flex justify-center items-center  focus:outline-none select-arrow">
        <option>Sort By</option>
        <option>Best Selling</option>
        <option>Alphabetically, A - Z</option>
        <option>Alphabetically, Z - A</option>
        <option>Price, low to high</option>
        <option>Price, high to low</option>
      </select>
    </div>
  );
};

export default FeaturedPage;
