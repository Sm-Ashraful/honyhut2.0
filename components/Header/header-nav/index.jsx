import React from "react";
import Link from "next/link";

import { BsInfoCircle } from "react-icons/bs";
import { FaHome, FaStore } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center text-secondary">
        <li>
          <a href="/" className="flex flex-col justify-center items-center ">
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </a>
        </li>

        <li>
          <Link
            href="/allproducts"
            className="flex flex-col justify-center items-center "
          >
            <FaStore />
            <span>Products</span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="flex flex-col justify-center items-center "
          >
            <BsInfoCircle />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
