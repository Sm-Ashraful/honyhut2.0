import React from "react";

const MobilDropdown = ({ submenus, depthLevel, dropdown }) => {
  depthLevel = depthLevel + 1;
  console.log("Mobil Dropdown: ", submenus, dropdown);
  return submenus ? (
    <ul
      className={`w-full absolute top-16 right-0 h-128 flex flex-col items-center flex-wrap bg-secondary shadow-hnx ${
        dropdown ? "block" : "hidden"
      }`}
    >
      <a href="#">{submenus.title}</a>
    </ul>
  ) : null;
};

export default MobilDropdown;
