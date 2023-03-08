import React, { useEffect, useRef } from "react";
import styles from "./sidebar.module.css";
import CategoryNav from "../category-nav";
// import CartNav from "../cart";
import { FaTimes } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { toggle } from "@/Store/slices/globalSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);

  const handleMenuButton = (event) => {
    event.preventDefault();
    dispatch(toggle());
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggle());
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={` ${
        isSidebarOpen
          ? `${styles.sidebar} ${styles.show_sidebar}`
          : `${styles.sidebar}`
      }`}
    >
      <nav className="px-5 py-3">
        <ul
          className={`${styles.table_header} flex justify-between items-center`}
        >
          <li>
            <a>Categories</a>
          </li>
          <li
            className="text-primary-red cursor-pointer text-lg"
            onClick={handleMenuButton}
          >
            <FaTimes />
          </li>
        </ul>
      </nav>
      <hr className="text-secondary font-bold" />
      <CategoryNav />
      {/* <CartNav/> */}
    </div>
  );
};

export default Sidebar;
