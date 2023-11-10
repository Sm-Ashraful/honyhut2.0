import React from "react";
import { HiChevronDown } from "react-icons/hi";

import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";

// import shild from "../../../../Assets/shield.svg";
import { BiShieldQuarter } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const HeaderTop = ({ handleCart }) => {
  return (
    <div className="w-full flex justify-between padding_inside bg-customTheme">
      <div className="flex gap-3 py-2 text-[12px] text-customText">
        <div className="flex items-center">
          <p>TV Shows</p>
          {/*<HiChevronDown />*/}
        </div>
        <div className="flex items-center">
          <p>Service</p>
          {/*<HiChevronDown />*/}
        </div>
        <div className="flex items-center ">
          <p>English</p>
          {/*<HiChevronDown />*/}
        </div>
      </div>
      <div className="flex gap-3 py-2 text-[12px] text-customText">
        <div className="flex gap-1 items-center">
          <MdOutlineFavoriteBorder />
          <Link href="/favorite">Favorite</Link>
        </div>
        ////
        <div className="flex gap-1 items-center cursor-pointer">
          <RiMessage3Line />
          <p>Message</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <BiShieldQuarter />
          <p> Order</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
