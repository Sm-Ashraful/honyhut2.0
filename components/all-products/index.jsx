import { useState } from "react";
import Image from "next/image";
import { IoFilter, IoArrowDown } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/Store/slices/globalSlice";

import Sidebar from "../Sidebar";

const Products = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const handleMenuOnClick = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return (
    <div>
      <div className=" w-full h-auto relative">
        <div className="md:border-b-2 bg-white w-full text-black  py-[10px] mb-2 flex justify-between px-5">
          <p
            onClick={handleMenuOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <Sidebar title={"Filter"} element={""} isOpen={isOpen} />
            <span>
              <IoFilter />
            </span>
            <span> Filter</span>
          </p>
          <p className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]">
            <span>Short By</span>
            <span>
              <IoArrowDown />
            </span>
          </p>
        </div>
        <div className="px-4 bg-white py-[10px] flex">
          <p className="mb-0  text-xl font-bold">
            <FaHome className="text-secondary" />
          </p>
          <p>
            {path.map((linkName) => {
              return (
                <span>
                  <span className="mx-2"> {"/"} </span>{" "}
                  <span className="capitalize">{linkName}</span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
