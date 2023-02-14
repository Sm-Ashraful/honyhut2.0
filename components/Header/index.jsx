import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Store/slices/globalSlice";

import { IoCall, IoLocationOutline } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";

import shoppingCart from "../../Assets/shopping-cart.png";
import menuButton from "../../Assets/icons8-menu-48 (2).png";

import styles from "./style.module.css";
import Sidebar from "../Sidebar";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSticky, setSticky] = useState(false);

  // sticky Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuOnClick = (event) => {
    event.preventDefault();
    dispatch(toggle());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term (e.g., perform a search)
  };

  return (
    <div className={styles.header_container}>
      <div className="bg-primary h-full w-full">
        <div id="myHeader" className="grid gap-1 padding_inside items-center ">
          <div className="flex justify-between items-center p-3 relative overflow-hidden">
            <div className="flex justify-center items-center md:hidden">
              <div
                className={`${styles.menu_button}`}
                onClick={handleMenuOnClick}
              ></div>
              <p>
                <span>Menu</span>
              </p>
            </div>
            <div className={styles.logo_box}></div>
            <div className="flex justify-center items-center space-x-5">
              <div className={styles.favourite_cart}>
                <span className={styles.favorite_count}>0</span>
              </div>
              <div className={styles.shopping_cart}>
                <span className={styles.cart_count}>0</span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.search_bar}>
          <input
            type="text"
            placeholder="What are you looking for today ..."
            className="appearance-none bg-white border border-secondary focus:outline-none focus:border-teal-500 text-base pl-10 py-2 pr-4 w-full"
            value={searchTerm}
            onChange={handleChange}
          />
          <div className={styles.search_icon}></div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;