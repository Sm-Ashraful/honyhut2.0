import React from "react";
import Link from "next/link";

import { BsInfoCircle } from "react-icons/bs";
import { FaHome, FaStore } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center text-[1.2rem] lg:text-[1.4rem] text-black">
        <li>
          <a href="/" className="flex flex-col justify-center items-center ">
            <span>
              <FaHome />
            </span>
            <span className="font-semibold">Home</span>
          </a>
        </li>

        <li>
          <Link
            href="/allproducts"
            className="flex flex-col justify-center items-center "
          >
            <FaStore />
            <span className="font-semibold">Products</span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="flex flex-col justify-center items-center "
          >
            <BsInfoCircle />
            <span className="font-semibold">About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
