import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { setIsDropdownVisible } from "@/Store/slices/globalSlice";

import {
  toggle,
  setIsHeaderSticky,
  setIsSearchModalOpen,
} from "../../Store/slices/globalSlice";
import { setIsCartOpen } from "../../Store/cart/cart.action";
import {
  selectCartCount,
  selectCartTotal,
} from "../../Store/cart/cart.selector";

import { selectFavItems } from "../../Store/favorite/favorite.selector";

import styles from "./style.module.css";
import logo from "../../Assets/honeyhut logo.png";
import Sidebar from "../Sidebar";
import CategoryNav from "../category-nav";
import AllDepartNav from "../all-department-nav";
import CartNav from "../cart";
import HeaderNav from "./header-nav";
import SearchModal from "../search-modal";

import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { ImMenu3 } from "react-icons/im";
import {
  MdManageAccounts,
  MdFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [lastScroll, setLastScroll] = useState(0);
  const [searchWidth, setSearchWidth] = useState(0);
  const total = useSelector(selectCartCount);
  const isHeaderSticky = useSelector((state) => state.sidebar.isHeaderSticky);
  const isSearchModalOpen = useSelector(
    (state) => state.sidebar.isSearchModalOpen
  );
  const searchBarRef = useRef(null);

  const totalCost = useSelector(selectCartTotal);

  const favItems = useSelector(selectFavItems);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && !isHeaderSticky) {
        dispatch(setIsHeaderSticky(true));
      } else if (currentScroll < lastScroll && isHeaderSticky) {
        dispatch(setIsHeaderSticky(false));
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll, isHeaderSticky]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
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
    dispatch(setIsSearchModalOpen(true));
  };

  const closeSearchModal = (e) => {
    dispatch(setIsSearchModalOpen(false));
  };

  useEffect(() => {
    setSearchWidth(searchBarRef.current.offsetWidth);
  }, []);

  return (
    <div className={`${styles.header_container}`}>
      {/**header top started */}
      <div
        className={`padding_inside ${
          isHeaderSticky ? "bg-secondary" : " bg-primary"
        } bg-primary h-1/2 md:h-3/5 w-full shadow-hnx`}
      >
        <div id="myHeader" className="flex justify-center items-center ">
          <div className="flex  justify-between h-full w-full items-center flex-wrap pt-3 md:pt-4">
            {/**logo */}
            <div
              className={`${styles.logo_box} flex justify-center items-center`}
            >
              <a href="/">
                <Image src={logo} alt={"Image"} cover />
              </a>
            </div>
            {/**cart */}
            <div className=" md:order-4 md:mr-3 relative">
              <div className="flex justify-center items-center text-black">
                <div
                  className={`${styles.menu_button} md:hidden mx-[10px]`}
                  onClick={handleMenuOnClick}
                >
                  <span className={`${styles.menu_button} `}>
                    <VscListSelection />
                  </span>
                </div>
                {/* whitelist section  */}
                <div className="text-4xl  hidden md:block cursor-pointer md:ml-[10px]">
                  <Link href="/favorite">
                    {favItems.length > 0 ? (
                      <MdFavorite />
                    ) : (
                      <MdOutlineFavoriteBorder />
                    )}
                  </Link>
                </div>

                {/* cart section  */}
                <div className="md:mx-[10px]">
                  <div
                    className={styles.shopping_cart}
                    onMouseDown={handleCart}
                  >
                    <div className="relative ml-1 text-3xl ">
                      <BsCart4 />
                      <span className={styles.cart_count}>{total}</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block text-xl pl-5">
                  <p>$ {totalCost.toFixed(2)}</p>
                </div>

                {/* cart section  end */}

                {/* whitelist section  end*/}
                {/* total const section  */}
                <div className="md:hidden text-xl ml-[10px] md:ml-[20px]">
                  <p>${totalCost.toFixed(2)}</p>
                </div>
                {/* total const section  */}
              </div>
            </div>
            {/**Header Nav */}
            <div className="hidden md:block md:order-3 w-1/3">
              <HeaderNav />
            </div>
          </div>
        </div>
      </div>
      {/**Header to end */}

      {/**Header bottom start */}
      <div className={`${styles.header_bottom} ${isHeaderSticky && "hidden"}`}>
        <div
          className={`w-full padding_inside flex justify-between items-center h-full`}
        >
          <div className="md:hidden w-full relative">
            <form
              onSubmit={handleSubmit}
              class="w-full flex items-center justify-center "
            >
              <span className="absolute right-8 text-black cursor-pointer">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="What are you looking for today ..."
                defaultValue={searchText}
                className="w-full shadow-md  bg-white text-base pl-[2rem] py-3  focus:outline-none rounded-full"
                onChange={handleChange}
                onFocus={openSearchModal}
                onBlur={closeSearchModal}
              />
            </form>
          </div>
          <div className="w-full hidden md:flex justify-between h-full">
            <div
              className={`w-1/5 h-full flex justify-center items-center mr-3 all-department relative`}
              onMouseEnter={openDepartment}
              onMouseLeave={closeDepartMent}
            >
              <p className="flex capitalize text-center font-bold text-black text-opacity-100 drop-shadow-xl cursor-pointer">
                <span className="px-3">
                  <ImMenu3 />
                </span>
                All Department
              </p>
              <div className="absolute top-20 left-0">
                <AllDepartNav />
              </div>
            </div>

            <div class="flex-1 relative w-full" ref={searchBarRef}>
              <form
                onSubmit={handleSubmit}
                class="absolute inset-0 flex items-center justify-center "
              >
                <span className="absolute right-8 text-black cursor-pointer">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="What are you looking for today ..."
                  class="shadow-md appearance-none bg-white text-base pl-10 py-4 pr-12 w-full focus:outline-none rounded-full"
                  onChange={handleChange}
                  defaultValue={searchText}
                  onFocus={openSearchModal}
                  onBlur={closeSearchModal}
                />
              </form>
              <div className="relative">
                {isSearchModalOpen && <SearchModal width={searchWidth} />}
              </div>
            </div>

            <div className="w-1/5 flex justify-center  items-center text-black ">
              <div className="px-5">
                <Link
                  href={{
                    pathname: "/auth/signin",
                  }}
                  className="flex flex-col justify-center items-center"
                >
                  <MdManageAccounts className="text-4xl" />
                  <span className="text-sm lg:text-[1rem] text-black font-semibold">
                    {currentUser.name ? currentUser.name : `Account`}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**header end */}
      {/**hader dropdown start */}
      <div>
        <CategoryNav />
      </div>

      {/**Header dropdown end */}
      <Sidebar />
      <CartNav
        headingLine={`Shopping Cart`}
        view={`View Cart`}
        goto={`Goto Checkout`}
      />
    </div>
  );
};

export default Header;
