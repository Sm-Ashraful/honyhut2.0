import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";

const SearchModal = ({ searchResults, width }) => {
  const isSearchModalOpen = useSelector(
    (state) => state.sidebar.isSearchModalOpen
  );
  return (
    <>
      {isSearchModalOpen ? (
        <div
          style={{ width: `${width}px` }}
          className={`h-96 bg-white flex overflow-x-hidden overflow-y-scroll fixed top-[8rem] md:left-[29%] md:top-[28%] rounded-md z-50 outline-none focus:outline-none border border-honey !border-t-0`}
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
