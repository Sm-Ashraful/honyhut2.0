// Store page
// Developed By Mehedi Hasan Munna (Dev-2)

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";
import Link from "next/link";
import styles from "../../components/heroSlider/slider.module.css";

import data from "../../utils/data-demo";
import Button from "../../components/Button";

import NewArrivals from "./newArrivals/index";
import TopRankings from "./topRanking/index";
import WeeklyDeals from "./weeklyDeals/index";
import TopProducts from "./topProduct/index";
import RecommendProduct from "../../components/RecommandForYou";
import WomenProducts from "./womenProduct/index";

import Image from "next/image";

const Store = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("data", data);
  }, []);
  return (
    <div className="padding_inside relative top-36 md:top-48 h-auto my-5">
      <div className="grid grid-cols-1 m-5 gap-4 justify-between md:grid-cols-3 sm:grid-cols-3 relative top-36">
        <div className="bg-white rounded-xl w-full">
          <NewArrivals />
        </div>
      </div>
    </div>
  );
};

export default Store;
