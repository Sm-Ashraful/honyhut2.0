import React from "react";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Menu() {
  return (
    <nav className="relative pt-5">
      <div className="relative container mx-auto text-[1.2rem] text-black  h-full">
        <ul className="">
          <Link href="/">
            <li className="flex items-center pl-4 shadow-sm py-5">
              <AiOutlineHome />
              <span className="  pl-2">Home</span>
            </li>
          </Link>

          <Link href="/all-products">
            <li className="flex items-center pl-4 shadow-sm py-5">
              <BiShoppingBag />
              <span className="  pl-2">Shop</span>
            </li>
          </Link>

          <Link href="/about">
            <li className="flex items-center pl-4 shadow-sm py-5">
              <TiContacts />
              <span className="  pl-2">Contact Us</span>
            </li>
          </Link>

          <Link href="/favorite">
            <li className="flex items-center pl-4 shadow-sm py-5">
              <GiSelfLove />
              <span className="  pl-2">Wishlist</span>
            </li>
          </Link>

          <Link href="/auth/signin">
            <li className="flex items-center pl-4 shadow-sm py-5">
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
        <div className="bottom-0 flex justify-center relative ">
          <a href="https://www.facebook.com" className="p-3 mx-2 ">
            <ImFacebook2 className="text-4xl" />
          </a>
          <a href="https://www.instagram.com" className="p-3 mx-2">
            <FaInstagramSquare className="text-4xl" />
          </a>
          <a href="https://www.google.com" className="p-3 mx-2">
            <FcGoogle className="text-4xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}
