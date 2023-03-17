import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styles from "./department-nav.module.css";
import { TiArrowSortedDown } from "react-icons/ti";
import LeftSection from "../heroSlider/leftSection";

const AllDepartNav = () => {
  const { isDropdownVisible } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <>
      {isDropdownVisible && (
        <div className="w-full">
          <LeftSection />
        </div>
      )}
    </>
  );
};

export default AllDepartNav;
