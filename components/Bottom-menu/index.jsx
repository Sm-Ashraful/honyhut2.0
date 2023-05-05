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

const BottomMenu = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href ? "active" : "";
  };

  return (
    <nav className={`${styles.bottom_container} bg-primary px-5 md:hidden`}>
      <ul className="h-full w-full flex justify-between items-center text-secondary text-bold text-lg">
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
        <li>
          <Link
            href="/favorite"
            className={`flex flex-col items-center justify-center ${isActive(
              "/favorite"
            )}`}
          >
            <MdOutlineFavoriteBorder className="text-4xl" />
            <span>Favorite</span>
          </Link>
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
