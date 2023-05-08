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
    <div class="flex ml-6 items-center">
      <div class="relative">
        <select class="text-xl font-medium rounded border appearance-none border-gray-300 py-2 pl-4 focus:outline-none focus:ring-2 focus:border-indigo-500">
          <option>Short By</option>
          <option>Best Selling</option>
          <option>Alphabetically, A - Z</option>
          <option>Alphabetically, Z - A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
        </select>
        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
          <IoArrowDown />
        </span>
      </div>
    </div>
  );
};

export default FeaturedPage;
