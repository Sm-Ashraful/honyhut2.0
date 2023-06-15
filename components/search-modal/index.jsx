import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { setIsSearchModalOpen } from "@/Store/slices/globalSlice";
import { useRouter } from "next/router";

const SearchModal = ({ searchResults, width }) => {
  const dispatch = useDispatch();
  const searchbarRef = useRef(null);

  const router = useRouter();

  const isSearchModalOpen = useSelector(
    (state) => state.sidebar.isSearchModalOpen
  );
  console.log("isSearchModalOpen", isSearchModalOpen);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target)
      ) {
        dispatch(setIsSearchModalOpen(false));
      }
    }
    function handleRouteChange(event) {
      dispatch(setIsSearchModalOpen(false));
    }
    // Add event listener to the document object
    if (isSearchModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      router.events.on("routeChangeComplete", handleRouteChange);
      document.addEventListener("scroll", handleRouteChange);
    }

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
      document.removeEventListener("scroll", handleRouteChange);
    };
  }, []);

  return (
    <>
      {isSearchModalOpen ? (
        <div
          ref={searchbarRef}
          style={{ width: `${width - 40}px` }}
          className={`h-96 bg-white flex overflow-x-hidden overflow-y-scroll fixed top-[6rem] md:left-[30%] md:top-[24%] rounded-md z-50 outline-none focus:outline-none border border-honey !border-t-0`}
        >
          <div className="px-[2rem] py-[1.5rem] flex flex-col">
            {searchResults.map((searchItem, idx) => {
              return (
                <Link href={`/product/${searchItem.id}`} key={idx}>
                  <div className="flex items-center">
                    <span className="w-[5rem] h-[5rem]">
                      <img src={searchItem.image[0]} alt="" />
                    </span>
                    <p className="pl-5 hover:text-headingColor cursor-pointer">
                      {searchItem.name}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchModal;
