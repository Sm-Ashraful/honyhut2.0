import React from "react";
import MenuItems from "../Menu-items";
import DropdownModal from "../dropdownModal";
import styles from "./style.module.css";

const Dropdown = ({ submenus, depthLevel, dropdown }) => {
  depthLevel = depthLevel + 1;

  return submenus ? (
    <ul
      style={{ width: `${submenus.length * 270}px` }}
      className={`absolute top-0 left-full h-128 flex flex-col items-center flex-wrap bg-primary shadow-hnx ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {submenus.map((dropMenu, index) => {
        let width = "";
        if (submenus.length === 2) {
          width = "w-1/2";
        } else if (submenus.length === 1) {
          width = "w-full";
        } else {
          width = "w-1/3";
        }
        return (
          <div
            className={`py-5 px-5 flex flex-col h-full shadow-right ${width}`}
          >
            <span className=" text-primary-red border-b-2">
              {dropMenu.title}
            </span>
            <DropdownModal items={dropMenu} />
          </div>
        );
      })}
    </ul>
  ) : null;
};

export default Dropdown;
