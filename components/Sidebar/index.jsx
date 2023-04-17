import React, { useRef, useEffect } from "react";
import styles from "./sidebar.module.css";
import MenuBar from "./menubar";

import { AiOutlineClose } from "react-icons/ai";

import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { toggle } from "@/Store/slices/globalSlice";

import { useRouter } from "next/router";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const router = useRouter();

  const handleMenuButton = (event) => {
    event.preventDefault();
    dispatch(toggle(false));
  };

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("routeChangeComplete", handleRouteChange);
    document.addEventListener("scroll", handleRouteChange);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
      document.removeEventListener("scroll", handleRouteChange);
    };
  }, []);

  function handleClickOutside(event) {
    event.preventDefault();
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggle(false));
    }
  }
  function handleRouteChange(event) {
    dispatch(toggle(false));
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
      <nav className="px-5 py-3">
        <ul
          className={`${styles.table_header} flex justify-between items-center`}
        >
          <li>
            <a className="font-bold">Menu</a>
          </li>
          <li
            className="hover:text-primary-red text-secondary cursor-pointer text-lg flex justify-between items-center"
            onClick={handleMenuButton}
          >
            <AiOutlineClose /> <span className=" pl-2">Close</span>
          </li>
        </ul>
      </nav>
      <hr className="text-gray font-bold mb-4" />
      <div>
        <MenuBar />
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
