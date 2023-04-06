import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import {
  setHeroContentInView,
  setIsDropdownVisible,
} from "@/Store/slices/globalSlice";

import { toggle } from "../../Store/slices/globalSlice";
import { setIsCartOpen } from "../../Store/cart/cart.action";
import {
  selectCartOpen,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../../Store/cart/cart.selector";

import { selectFavItems } from "../../Store/favorite/favorite.selector";

import styles from "./style.module.css";
import logo from "../../Assets/honeyhut logo.png";
import Sidebar from "../Sidebar";
import CategoryNav from "../category-nav";
import AllDepartNav from "../all-department-nav";
import CartNav from "../cart";

import { FaHome, FaStore, FaSearch } from "react-icons/fa";
import { BsInfoCircle, BsCart4 } from "react-icons/bs";
import { ImMenu3 } from "react-icons/im";
import {
  MdManageAccounts,
  MdFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isCartOpen = useSelector(selectCartOpen);
  const total = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotal);
  const isDropdownVisible = useSelector(
    (state) => state.sidebar.isDropdownVisible
  );
  const isHeroContentInView = useSelector(
    (state) => state.sidebar.isHeroContentInView
  );

  const favItems = useSelector(selectFavItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change 768 to the breakpoint you're using in Tailwind CSS
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuOnClick = (event) => {
    event.preventDefault();
    dispatch(toggle());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term (e.g., perform a search)
  };

  const openSearchBar = (event) => {
    event.preventDefault();
    setSearchTerm(!searchTerm);
  };

  const openCategoryMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openDepartment = (e) => {
    if (isHeroContentInView === false) {
      dispatch(setIsDropdownVisible(true));
    }
  };

  const closeDepartMent = () => {
    dispatch(setIsDropdownVisible(false));
  };

  const handleCart = (e) => {
    e.preventDefault();
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className={`${styles.header_container}`}>
      {/**header top started */}
      <div className="padding_inside bg-primary h-1/2 md:h-3/5 w-full">
        <div
          id="myHeader"
          className="padding_inside flex justify-center items-center "
        >
          <div className="flex  justify-between h-full w-full items-center flex-wrap py-3">
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
              <div className="flex justify-center items-center space-x-5">
                <div
                  className={`${styles.menu_button} md:hidden`}
                  onClick={handleMenuOnClick}
                >
                  <span className={`${styles.menu_button}`}></span>
                </div>
                
                {/* cart section  */}
                <div>
                  <div
                    className={styles.shopping_cart}
                    onMouseEnter={!isMobile ? handleCart : undefined}
                    onMouseLeave={!isMobile ? handleCart : undefined}
                    onClick={isMobile ? handleCart : undefined}
                  >
                    <div className="relative mt-4 ml-1 text-3xl text-secondary">
                      <BsCart4 />
                      <span className={styles.cart_count}>{total}</span>
                    </div>
                    <CartNav
                      headingLine={`Shopping Cart`}
                      view={`View Cart`}
                      goto={`Goto Checkout`}
                    />
                  </div>
                </div>
                {/* cart section  end */}
                {/* whitelist section  */}
                <div className="text-4xl text-secondary hidden md:block cursor-pointer">
                  <Link href="/favorite">
                    {favItems.length > 0 ? (
                      <MdFavorite />
                    ) : (
                      <MdOutlineFavoriteBorder />
                    )}
                  </Link>
                </div>
                {/* whitelist section  end*/}
                {/* total const section  */}
                <div className="md:hidden text-xl text-secondary">
                  <p>${totalCost.toFixed(2)}</p>
                </div>
                {/* total const section  */}
              </div>
            </div>
            {/**Header Nav */}
            <div className="hidden md:block md:order-3 h-7 w-1/3">
              <nav>
                <ul className="flex justify-between items-center text-secondary">
                  <li>
                    <a
                      href="/"
                      className="flex flex-col justify-center items-center text-secondary"
                    >
                      <span>
                        <FaHome />
                      </span>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="flex flex-col justify-center items-center text-secondary"
                    >
                      <BsInfoCircle />
                      <span>About</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/allproducts"
                      className="flex flex-col justify-center items-center text-secondary"
                    >
                      <FaStore />
                      <span>Products</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/**Header to end */}

      {/**Header bottom start */}
      <div className={`${styles.header_bottom}`}>
        <div
          className={`w-full padding_inside flex justify-between items-center h-full`}
        >
          <div className="flex justify-center items-center space-x-2 text-white md:hidden">
            <div
              className={`${styles.drp_menu}`}
              onClick={openCategoryMenu}
            ></div>
            <p className="text-xl">Shop by category</p>
          </div>

          <div onClick={openSearchBar} className="md:hidden">
            <div className={`${styles.search_icon} mr-5`}></div>
          </div>
          <div className="w-full hidden md:flex h-full">
            <div
              className={`w-1/5 h-full flex justify-center items-center mr-3 all-department relative`}
              onMouseEnter={openDepartment}
              onMouseLeave={closeDepartMent}
            >
              <p className="flex capitalize text-center font-bold text-white text-opacity-100 drop-shadow-xl cursor-pointer">
                <span className="px-3">
                  <ImMenu3 />
                </span>
                All Department
              </p>
              <div className="absolute top-20 left-0">
                <AllDepartNav />
              </div>
            </div>

            <div class="flex-1 relative">
              <form class="absolute inset-0 flex items-center justify-center ">
                <span className="absolute right-8 text-secondary cursor-pointer">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="What are you looking for today ..."
                  class="shadow-md appearance-none bg-white text-base pl-10 py-4 pr-12 w-full focus:outline-none rounded-full"
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="w-1/5 flex justify-center space-x-5 items-center text-white text-4xl">
              <div>
                <Link
                  href={{
                    pathname: "/auth/signin",
                  }}
                  className=""
                >
                  <MdManageAccounts />
                </Link>
              </div>

              <div className="hidden md:block text-xl ">
                <p>$ {totalCost.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        {searchTerm && (
          <form className="md:hidden bg-primary h-16 w-full top-36 md:top-48 left-0 absolute">
            <input
              type="text"
              placeholder={`What are you looking for today ...`}
              className="shadow-md appearance-none bg-white  text-base pl-10 py-4 pr-12 w-full focus:outline-none"
              onChange={handleChange}
            />
          </form>
        )}
      </div>

      {/**header end */}
      {/**hader dropdown start */}
      <div
        className={`${styles.dropdownMenu} ${
          isMenuOpen ? `${styles.open}` : ""
        }`}
      >
        <CategoryNav />
      </div>

      {/**Header dropdown end */}
      <Sidebar />
    </div>
  );
};

export default Header;
