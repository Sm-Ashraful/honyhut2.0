import React, { useRef, useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import MenuBar from "./menubar";

import { FaTimes } from "react-icons/fa";

import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { toggle } from "@/Store/slices/globalSlice";

import { useRouter } from "next/router";
import CategoryItem from "../category-nav/category";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("menu");
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Add event listener to the document object
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      router.events.on("routeChangeComplete", handleRouteChange);
      document.addEventListener("scroll", handleRouteChange);
    }

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
      document.removeEventListener("scroll", handleRouteChange);
    };
  }, []);

  const handleMenuButton = (event) => {
    event.preventDefault();
    dispatch(toggle(false));
  };

  function handleClickOutside(event) {
    event.preventDefault();
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggle(false));
    }
  }
  function handleRouteChange(event) {
    dispatch(toggle(false));
  }

  function handleMenuSection(menu) {
    setSelectedMenu(menu);
  }

  return (
    <div
      className={`${
        isSidebarOpen
          ? `${styles.sidebar} ${styles.show_sidebar}`
          : `${styles.sidebar}`
      }`}
      ref={sidebarRef}
    >
      <div className="flex items-center shadow-md w-full z-10">
        <p className="w-full h-full text-2xl text-headingColor font-bold flex justify-between ">
          <span className="flex-1 flex items-center h-full">
            <span
              onClick={() => handleMenuSection("menu")}
              className={`basis-1/2 border-r text-center  h-full px-5 py-5  ${
                selectedMenu === "menu" ? `${styles.isActive}` : `blur-[1px]`
              }`}
            >
              Menu
            </span>
            <span
              onClick={() => handleMenuSection("category")}
              className={`basis-1/2 border-r text-center h-full px-5 py-5  ${
                selectedMenu === "category"
                  ? `${styles.isActive}`
                  : `blur-[1px]`
              }`}
            >
              Categories
            </span>
          </span>
          <span
            className="mr-3 ml-4 px-5 py-5 text-primary-red"
            onClick={handleMenuButton}
          >
            <FaTimes />
          </span>
        </p>
      </div>

      <div>
        {selectedMenu === "menu" ? (
          <MenuBar />
        ) : (
          <CategoryItem handleClickOutside={handleClickOutside} />
        )}
      </div>

      {/* social media */}
      <div className="flex justify-center relative top-[20%]">
        <a href="https://www.facebook.com" className="p-3 mx-2 ">
          <ImFacebook2 className="text-4xl" />
        </a>
        <a href="https://www.instagram.com" className="p-3 mx-2">
          <FaInstagramSquare className="text-4xl" />
        </a>
        <a href="https://www.google.com" className="p-3 mx-2">
          <FcGoogle className="text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
