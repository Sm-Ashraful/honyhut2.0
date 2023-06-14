import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./style.module.css";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdManageAccounts,
} from "react-icons/md";
import { FaHome, FaStore } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

import { selectFavItems } from "@/Store/favorite/favorite.selector";
import { useSelector } from "react-redux";

const BottomMenu = () => {
  const router = useRouter();

  const favItems = useSelector(selectFavItems);

  const isActive = (href) => {
    return router.pathname === href ? "active" : "";
  };
  console.log("Fav ITems: ", favItems);

  return (
    <nav
      className={`${styles.bottom_container} bg-primary padding_inside md:hidden`}
    >
      <ul className="h-full w-full flex justify-between items-center text-black text-bold text-lg">
        <li className="">
          <Link
            href={{
              pathname: "/auth/signin",
            }}
            className={`flex flex-col items-center justify-center ${isActive(
              "/auth/signin"
            )}`}
          >
            <MdManageAccounts className="text-4xl" />
            <span>Profile</span>
          </Link>
        </li>
        <li className="relative">
          <Link
            href="/favorite"
            className={`flex flex-col items-center justify-center ${isActive(
              "/favorite"
            )}`}
          >
            <MdOutlineFavoriteBorder className="text-4xl" />
            <span>Favorite</span>
          </Link>
          <span className="absolute w-[1.5rem] h-[1.5rem] left-9 -top-2 bg-honey rounded-full flex justify-center items-center text-white text-[12px]">
            {favItems.length}
          </span>
        </li>
        <li className="">
          <a
            href="/"
            className={`flex flex-col items-center justify-center ${isActive(
              "/"
            )}`}
          >
            <FaHome className="text-4xl" />
            <span>Home</span>
          </a>
        </li>
        <li className="">
          <Link
            href="/allproducts"
            className={`flex flex-col items-center justify-center ${isActive(
              "/allproducts"
            )}`}
          >
            <FaStore className="text-4xl" />
            <span>Store</span>
          </Link>
        </li>
        <li className="">
          <Link
            href="/about"
            className={`flex flex-col items-center justify-center ${isActive(
              "/about"
            )}`}
          >
            <BsInfoCircle className="text-4xl" />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;
