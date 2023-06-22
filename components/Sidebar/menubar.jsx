import React from "react";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const MenuBar = () => {
  return (
    <nav className="relative pt-5">
      <div className="container mx-auto text-[1.2rem] text-black">
        <ul>
          <Link href="/">
            <li className="flex items-center pl-4 shadow-sm py-4">
              <AiOutlineHome />
              <span className="  pl-2">Home</span>
            </li>
          </Link>

          <Link href="/allproducts">
            <li className="flex items-center pl-4 shadow-sm py-4">
              <BiShoppingBag />
              <span className="  pl-2">Shop</span>
            </li>
          </Link>

          <Link href="/about">
            <li className="flex items-center pl-4 shadow-sm py-4">
              <TiContacts />
              <span className="  pl-2">Contact Us</span>
            </li>
          </Link>

          <Link href="/favorite">
            <li className="flex items-center pl-4 shadow-sm py-4">
              <GiSelfLove />
              <span className="  pl-2">Wishlist</span>
            </li>
          </Link>

          <Link href="/auth/signin">
            <li className="flex items-center pl-4 shadow-sm py-4">
              <BsPeople />
              <span className="  pl-2">Login / Register</span>
            </li>
          </Link>
          <a
            href="mailto:support@honyhut.com"
            className="font-semibold flex  items-center gap-2 py-4 pl-4"
          >
            <GrMail />
            support@honyhut.com
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
