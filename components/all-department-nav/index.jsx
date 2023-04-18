import { useDispatch, useSelector } from "react-redux";
import React from "react";
import DropdownNavbar from "../navbar";

const AllDepartNav = () => {
  const { isDropdownVisible } = useSelector((state) => state.sidebar);
  return (
    <>
      {isDropdownVisible && (
        <div className="w-full h-auto">
          <DropdownNavbar />
        </div>
      )}
    </>
  );
};

export default AllDepartNav;
