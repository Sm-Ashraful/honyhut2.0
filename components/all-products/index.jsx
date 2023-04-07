import { useState } from "react";
import Image from "next/image";
import { IoFilter, IoArrowDown } from "react-icons/io5";
import Filter from "../sidebarFilter/filter";
import SortBy from "../sidebarFilter/featured";

import { FaHome } from "react-icons/fa";

import Sidebar from "../Sidebar";

const FilterProducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterOnClick = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleShortOnClick = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return (
    <div>
      <div className="w-full h-auto relative">
        <div className="md:border-b-2 bg-white w-full text-black  py-[10px] mb-2 flex justify-between px-5">
          <p
            onClick={handleFilterOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <Sidebar title={"Filter"} element={""} isOpen={isOpen} />
            <span>
              <IoFilter />
            </span>
            <span> Filter</span>
          </p>

          <p
            onClick={handleShortOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <span>Short By</span>
            <span>
              <IoArrowDown />
            </span>
          </p>
        </div>
        <div className="md:flex md:flex-col">
          <div>
            <Filter />
          </div>
          <div>
            <SortBy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
