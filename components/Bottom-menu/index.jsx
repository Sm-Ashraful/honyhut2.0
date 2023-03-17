import React from "react";
import Link from "next/link";

import styles from "./style.module.css";

const BottomMenu = () => {
  return (
    <nav
      className={`${styles.bottom_container} bg-secondary padding_inside md:hidden`}
    >
      <ul className="h-full w-full flex justify-between items-center text-primary text-bold text-lg">
        <li className="">
          <Link
            href={{
              pathname: "/auth/signin",
            }}
            className=""
          >
            <span className={`${styles.bottom_account}`}></span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/favorite"
            className="flex flex-col items-center justify-center"
          >
            <span className={styles.favourite_cart}></span>
            <span>Favorite</span>
          </Link>
        </li>
        <li className="">
          <a href="/" className="">
            <span className={`${styles.bottom_home}`}></span>
            <span>Home</span>
          </a>
        </li>
        <li className="">
          <Link href="/allproducts">
            <span className={`${styles.bottom_store}`}></span>
            <span>Store</span>
          </Link>
        </li>
        <li className="">
          <Link href="/about">
            <span className={`${styles.bottom_about}`}></span>
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;
