import React from "react";
import { useState, useEffect, useRef } from "react";
import HeaderTop from "./partials/header-top";
import HeaderMain from "./partials/Header-main";
import logo from "../../Assets/honeyhut logo.png";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import getProductFromSearch from "@/utils/helper/searchText";
import { allProducts } from "@/utils/products";

import { setIsDropdownVisible } from "@/Store/slices/globalSlice";
import {
  toggle,
  setIsHeaderSticky,
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
import CategoryNav from "../category-nav";
import AllDepartNav from "../all-department-nav";
import CartNav from "../cart";
import HeaderNav from "./partials/header-nav";
import SearchModal from "../search-modal";

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [searchWidth, setSearchWidth] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const total = useSelector(selectCartCount);
  const isHeaderSticky = useSelector((state) => state.sidebar.isHeaderSticky);
  const totalCost = useSelector(selectCartTotal);
  const searchValue = useSelector((state) => state.sidebar.searchValue);
  const favItems = useSelector(selectFavItems);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const searchBarRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleMenuOnClick = (event) => {
    event.preventDefault();
    dispatch(toggle(true));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the search term (e.g., perform a search)
  };

  const openDepartment = (e) => {
    dispatch(setIsDropdownVisible());
  };

  const closeDepartMent = (e) => {
    dispatch(setIsDropdownVisible());
  };

  const handleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setIsCartOpen(true));
  };

  const openSearchModal = (e) => {
    e.preventDefault();
    dispatch(setIsSearchModalOpen(true));
  };

  const closeSearchModal = (e) => {
    dispatch(setIsSearchModalOpen(false));
  };

  // useEffect(() => {
  //   setSearchWidth(searchBarRef.current.offsetWidth);
  // }, []);

  // useEffect(() => {
  //   setSearchResults(getProductFromSearch(allProducts, searchValue));
  // }, [searchValue]);
  return (
    <div>
      <div className="hidden md:block">
        <HeaderTop handleCart={handleCart} />
      </div>
      <HeaderMain logo={logo} />
      <CartNav
        headingLine={`Shopping Cart`}
        view={`View Cart`}
        goto={`Goto Checkout`}
      />
    </div>
  );
};

export default Header;
