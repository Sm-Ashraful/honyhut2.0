import React from "react";
import { HiChevronDown } from "react-icons/hi";

import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import Link from "next/link";

const HeaderTop = ({ handleCart }) => {
  return (
    <div className="w-full flex justify-between padding_inside">
      <div className="flex gap-3 py-2 text-[12px] text-trueGray-500">
        <div className="flex items-center">
          <p>TV Shows</p>
          <HiChevronDown />
        </div>
        <div className="flex items-center">
          <p>Service</p>
          <HiChevronDown />
        </div>
        <div className="flex items-center ">
          <p>English</p>
          <HiChevronDown />
        </div>
      </div>
      <div className="flex gap-3 py-2 text-[12px] text-trueGray-500">
        <div className="flex gap-1 items-center">
          <MdOutlineFavoriteBorder />
          <Link href="/favorite">Favorite</Link>
        </div>
        <div
          className="flex gap-1 items-center cursor-pointer"
          onMouseDown={handleCart}
        >
          <BsCart4 />
          <p>Cart</p>
        </div>
        <div className="flex gap-1 items-center">
          <RiMessage3Line />
          <p>Message</p>
        </div>
        <div className="flex gap-1 items-center">
          <GoPerson />
          <div>
            <Link href={"/auth/signin"}>Sign In</Link> |
            <Link href={"/auth/signup"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
