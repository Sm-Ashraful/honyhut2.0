import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import categories from "../../utils/category-demo-data";

import { toggleMobileCategory } from "../../Store/slices/globalSlice";

import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { MdOutlineSendToMobile } from "react-icons/md";

const CategoryNav = () => {
  const [headingText, setHeadingText] = useState("");
  const [subHeadingText, setSubHeadingText] = useState("");
  const sidebarRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const isMobileDropDownOpen = useSelector(
    (state) => state.sidebar.isMobileDropDownOpen
  );

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
      dispatch(toggleMobileCategory(false));
    }
  }

  function handleRouteChange() {
    dispatch(toggleMobileCategory(false));
  }

  const handleHeadingClick = (category, e) => {
    e.preventDefault();
    return headingText !== category.name
      ? setHeadingText(category.name)
      : setHeadingText("");
  };

  return (
    <div
      ref={sidebarRef}
      className={`${styles.dropdownMenu} ${
        isMobileDropDownOpen ? `${styles.open}` : ""
      }`}
    >
      <ul>
        {categories.map((category, idx) => {
          return (
            <div className="mt-3">
              <div
                className="px-5 pt-4 font-bold text-xl flex justify-between items-center"
                onClick={(e) => handleHeadingClick(category, e)}
              >
                <div className="flex justify-center items-center gap-[10px]">
                  <div className="relative w-[40px] h-[40px]">
                    <Image src={category.image} fill cover />
                  </div>
                  <div>
                    <p className="font-bold capitalize text-[1.7rem]">
                      {category.name}
                    </p>
                    <p className="text-sm text-tertiary">
                      {category.subCategory.length} subcategories,{" "}
                      {category.totalItem} products
                    </p>
                  </div>
                </div>

                <span className="text-tertiary  text-2xl">
                  {headingText === category.name ? (
                    <CiCircleChevUp />
                  ) : (
                    <CiCircleChevDown />
                  )}
                </span>
              </div>
              <div
                className={`${
                  headingText === category.name ? "md:hidden" : "hidden"
                }`}
              >
                <div>
                  {category.subCategory.map((subLinks, index) => {
                    return (
                      <div>
                        <li>
                          <div className="py-5 pl-20 font-semibold  flex justify-between item-center px-5">
                            <Link
                              href={`/brand-name/${subLinks.title}`}
                              className="flex justify-center items-center gap-[10px]"
                            >
                              <div className="relative w-[40px] h-[40px]">
                                <Image src={subLinks.icon} fill cover />
                              </div>
                              <div>
                                <p className="font-bold capitalize ">
                                  {subLinks.title}
                                </p>
                                <p className="text-sm text-tertiary">
                                  {subLinks.items} products
                                </p>
                              </div>
                            </Link>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryNav;
