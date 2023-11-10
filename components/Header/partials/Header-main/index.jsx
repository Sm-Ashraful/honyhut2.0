import React, { useState, useEffect } from "react";
import Dart from "../../../../Assets/dart.svg";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import Listing from "../../../../Assets/listing-box.svg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import Link from "next/link";

import { toggle } from "@/Store/slices/globalSlice";
import { useDispatch } from "react-redux";

import AccountDropdown from "../account-dropdown";
import CartNav from "@/components/cart";
import { FaSearch } from "react-icons/fa";

const HeaderMain = ({ logo, handleCart }) => {
  const [nav, setNav] = useState("");
  const [fixedNav, setFixedNav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setNav("fixed top-0 left-0 ");
        if (window.innerWidth < 720) {
          setFixedNav(true);
        }
      } else {
        setNav("");
        setFixedNav(false);
      }

      // Update the previous scroll position with the current one
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSidebar = () => {
    dispatch(toggle(true));
  };
  const handleSearchToggle = () => {
    setFixedNav(!fixedNav);
  };
  return (
    <div
      className={`padding_inside !pb-2  md:!pb-0 flex flex-col md:flex-row md:gap-20 items-center bg-white ${nav} z-50 min-w-full`}
    >
      {/** Logo part*/}
      <div className="w-full md:w-auto flex justify-between items-center">
        <div className="md:hidden w-[30%] flex items-center gap-3">
          <p className="relative w-[fit-content]" onClick={handleSidebar}>
            <span>
              <Image src={Listing} alt="list-icon" width={18} height={18} />
            </span>
          </p>
          <p
            className={`${fixedNav ? "block" : "hidden"}`}
            onClick={handleSearchToggle}
          >
            <FaSearch />
          </p>
        </div>
        <div
          className={`w-[8rem] md:w-[11rem] flex justify-center items-center py-5`}
        >
          <a href="/" className="w-full">
            <img src={"/honeyhut logo.png"} alt={"Image"} className="w-full" />
          </a>
        </div>
        <div className="md:hidden  flex justify-end items-center gap-x-1 text-[21px]">
          <Link href="/favorite" className="md:text-[26px]">
            <MdOutlineFavoriteBorder />
          </Link>

          <CartNav />

          <Link href={"/auth/signup"} className="md:text-[26px]">
            <GoPerson />
          </Link>
        </div>
      </div>
      {/**Search Bar*/}
      <div
        className={`${fixedNav ? "hidden !pb-0" : "md:flex-1 block"}  w-full`}
      >
        <form className="w-full">
          <div class="flex w-full border-[2px] border-customTheme rounded-full overflow-hidden">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white hover:bg-gray-200"
              type="button"
            >
              All categories{" "}
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 focus:outline-none"
                placeholder="I'm looking for ..."
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 py-2.5 px-6 text-sm font-medium h-full text-white bg-customTheme "
              >
                <span className="text-customText">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/** rest things*/}
      <div className="w-1/4 hidden md:flex gap-5 justify-end items-center">
        <CartNav />

        <div className="flex gap-1 items-center cursor-pointer">
          <GoPerson className="text-[26px]" />
          <div className="flex items-center gap-2">
            <Link href={"/auth/signin"}>Sign In</Link> |
            <Link href={"/auth/signup"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
