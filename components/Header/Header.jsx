import React from "react";
import { useState, useEffect, useRef } from "react";
import HeaderTop from "./partials/header-top";
import HeaderMain from "./partials/Header-main";
import logo from "../../Assets/honeyhut logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsDropdownVisible } from "@/Store/slices/globalSlice";
import {
  toggle,
  setIsSearchModalOpen,
  setSearchValue,
} from "../../Store/slices/globalSlice";
import { setIsCartOpen } from "../../Store/cart/cart.action";
import {
  selectCartCount,
  selectCartTotal,
} from "../../Store/cart/cart.selector";
import { selectFavItems } from "../../Store/favorite/favorite.selector";
import Sidebar from "../Sidebar";
import CartNav from "../cart";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setIsCartOpen(true));
  };

  return (
    <div>
      <div className="hidden md:block">
        <HeaderTop handleCart={handleCart} />
      </div>
      <HeaderMain logo={logo} handleCart={handleCart} cartCount={cartCount} />

      <Sidebar />
    </div>
  );
};

export default Header;
