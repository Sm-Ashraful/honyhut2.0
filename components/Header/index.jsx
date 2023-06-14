import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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

import logo from "../../Assets/honeyhut logo.png";
import Sidebar from "../Sidebar";
import CategoryNav from "../category-nav";
import AllDepartNav from "../all-department-nav";
import CartNav from "../cart";
import HeaderNav from "./partials/header-nav";
import SearchModal from "../search-modal";

import styles from "./style.module.css";

import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { ImMenu3 } from "react-icons/im";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";

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

  useEffect(() => {
    setSearchWidth(searchBarRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    setSearchResults(getProductFromSearch(allProducts, searchValue));
  }, [searchValue]);

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
                  className={`text-2xl font-extrabold md:hidden mx-[10px]`}
                  onClick={handleMenuOnClick}
                >
                  <VscListSelection />
                </div>
                {/* whitelist section  */}
                <div className="relative text-2xl  hidden md:block cursor-pointer md:mx-[10px]">
                  <Link href="/favorite">
                    {favItems.length > 0 ? (
                      <MdFavorite />
                    ) : (
                      <MdOutlineFavoriteBorder />
                    )}
                  </Link>
                  <span className={styles.fav_count}>{favItems.length}</span>
                </div>

                {/* cart section  */}
                <div className="mx-[10px]">
                  <div onMouseDown={handleCart}>
                    <div className="relative ml-1 text-2xl ">
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
              <HeaderNav
                currentUser={currentUser}
                isHeaderSticky={isHeaderSticky}
              />
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
          <div className="w-full md:flex justify-between h-full">
            <div
              className={`w-1/4 h-full hidden md:flex justify-center items-center mr-3 all-department relative`}
              onMouseEnter={openDepartment}
              onMouseLeave={closeDepartMent}
            >
              <p className="flex capitalize text-center font-bold text-black text-opacity-100 drop-shadow-xl cursor-pointer">
                <span className="px-3">
                  <ImMenu3 />
                </span>
                All Department
              </p>
              <div className="absolute top-[4rem] left-0">
                <AllDepartNav />
              </div>
            </div>

            <div
              class="flex-1 relative w-full mt-[1.85rem] md:mt-0"
              ref={searchBarRef}
              onClick={openSearchModal}
            >
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
                  defaultValue={searchValue}
                />
              </form>
              {searchWidth ? (
                <SearchModal
                  width={searchWidth}
                  searchResults={searchResults}
                />
              ) : null}
            </div>

            <div className="w-1/5 hidden md:flex justify-end  items-center text-black ">
              <p className="font-semibold flex justify-center items-center gap-2">
                <GrMail />
                support@honyhut.com
              </p>
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
