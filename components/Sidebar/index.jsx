import React, { useRef, useEffect } from "react";
import styles from "./sidebar.module.css";
import CategoryNav from "../category-nav";
import MenuBar from "./menubar";
import Link from "next/link";

import { menuItem } from "../../utils/menu-item";
import { AiOutlineClose } from "react-icons/ai";

import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";

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

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    console.log("event: ", event.target);
    console.log("Hello: ", sidebarRef.current);
    console.log("event target: ", sidebarRef.current.contains(event.target));
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggle());
    }
  }

  return (


      <div
        ref={sidebarRef}
        className={`${
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
          <a
            href="https://www.instagram.com"
            className="p-3 mx-2"
          >
            <FaInstagramSquare className="text-4xl" />
          </a>
          <a
            href="https://www.google.com"
            className="p-3 mx-2"
          >
            <FcGoogle className="text-4xl" />
          </a>
        </div>
      </div>

   

  );
};

export default Sidebar;
