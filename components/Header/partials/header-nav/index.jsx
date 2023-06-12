import React from "react";
import Link from "next/link";

import { BsInfoCircle } from "react-icons/bs";
import { FaHome, FaStore } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";

const HeaderNav = ({ currentUser, isHeaderSticky }) => {
  return (
    <nav>
      <ul className="flex justify-between items-center  text-black text-[1.4rem] font-openSans">
        <li>
          <a href="/" className="flex flex-col justify-center items-center ">
            <span>
              <FaHome
                className={`${isHeaderSticky ? "text-black" : "text-honey"}`}
              />
            </span>
            <span className="text-sm lg:text-[1rem] text-black font-semibold">
              Home
            </span>
          </a>
        </li>

        <li>
          <Link
            href="/allproducts"
            className="flex flex-col justify-center items-center "
          >
            <FaWarehouse
              className={`${isHeaderSticky ? "text-black" : "text-honey"}`}
            />
            <span className="text-sm lg:text-[1rem] text-black font-semibold">
              Shop
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="flex flex-col justify-center items-center "
          >
            <BsInfoCircle
              className={`${isHeaderSticky ? "text-black" : "text-honey"}`}
            />
            <span className="text-sm lg:text-[1rem] text-black font-semibold">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/auth/signin",
            }}
            className="flex flex-col justify-center items-center"
          >
            <MdManageAccounts
              className={`${isHeaderSticky ? "text-black" : "text-honey"}`}
            />
            <span className="text-sm lg:text-[1rem] text-black font-semibold">
              {currentUser.name ? currentUser.name : `My Account`}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
