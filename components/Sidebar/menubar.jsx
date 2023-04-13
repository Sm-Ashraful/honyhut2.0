import React from "react";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

const MenuBar = () => {
  return (
    <nav className="relative">
      <div className="container mx-auto">
        <ul className=" items-center">
          <li>
            <Link href="/">
              <li className="flex items-center pl-4">
                <AiOutlineHome />
                <span className="text-secondary hover:text-tertiary pl-2">
                  Home
                </span>
              </li>
            </Link>
          </li>
          <hr className="text-gray font-bold my-4" />
          <li>
            <Link href="/allproducts">
              <li className="flex items-center pl-4">
                <BiShoppingBag />
                <span className="text-secondary hover:text-tertiary pl-2">
                  Shop
                </span>
              </li>
            </Link>
          </li>
          <hr className="text-gray font-bold my-4" />
          <li>
            <Link href="/about">
              <li className="flex items-center pl-4">
                <TiContacts />
                <span className="text-secondary hover:text-tertiary pl-2">
                  Contact Us
                </span>
              </li>
            </Link>
          </li>
          <hr className="text-gray font-bold my-4" />
          <li>
            <Link href="/favorite">
              <li className="flex items-center pl-4">
                <GiSelfLove />
                <span className="text-secondary hover:text-tertiary pl-2">
                  Wishlist
                </span>
              </li>
            </Link>
          </li>
          <hr className="text-gray font-bold my-4" />
          <li>
            <Link href="/auth/signin">
              <li className="flex items-center pl-4">
                <BsPeople />
                <span className="text-secondary hover:text-tertiary pl-2">
                  Login / Register
                </span>
              </li>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
