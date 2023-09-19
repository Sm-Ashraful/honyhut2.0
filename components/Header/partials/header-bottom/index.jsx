import React, { useEffect, useRef, useState } from "react";

import { ImMenu3 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import SearchModal from "../../../search-modal";

import styles from "../../style.module.css";
import AllDepartNav from "@/components/all-department-nav";
import {
  setIsDropdownVisible,
  setIsSearchModalOpen,
  setSearchValue,
} from "@/Store/slices/globalSlice";
import { useDispatch } from "react-redux";

const HeaderBottom = (props) => {
  const [searchWidth, setSearchWidth] = useState(0);

  const dispatch = useDispatch();

  const searchBarRef = useRef();

  const openDepartment = (e) => {
    dispatch(setIsDropdownVisible());
  };

  const closeDepartMent = (e) => {
    dispatch(setIsDropdownVisible());
  };

  const openSearchModal = (e) => {
    e.preventDefault();
    dispatch(setIsSearchModalOpen(true));
  };

  const closeSearchModal = (e) => {
    dispatch(setIsSearchModalOpen(false));
  };

  const handleChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the search term (e.g., perform a search)
  };

  useEffect(() => {
    setSearchWidth(searchBarRef.current.offsetWidth);
  }, []);

  return (
    <div
      className={`${styles.header_bottom} ${props.isHeaderSticky && "hidden"}`}
    >
      <div
        className={`w-full padding_inside flex justify-between items-center h-full xl:w-[1440px]`}
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
                defaultValue={props.searchValue}
              />
            </form>
            {searchWidth ? (
              <SearchModal
                width={searchWidth}
                searchResults={props.searchResults}
              />
            ) : null}
          </div>

          <div className="w-1/5 hidden md:flex justify-end  items-center text-black ">
            <a
              href="mailto:support@honyhut.com"
              className="font-semibold flex justify-center items-center gap-2"
            >
              <GrMail />
              support@honyhut.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
