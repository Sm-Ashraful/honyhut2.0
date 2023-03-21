import React from "react";

const DropdownModal = ({ items }) => {
  console.log("items: ", items.submenu);
  return (
    <li className="flex flex-col text-lg leading-6 pt-5 flex-wrap">
      {items.submenu.map((menuLink, index) => {
        return (
          <a href="#" style={{ paddingTop: "3px" }}>
            {menuLink.title}
          </a>
        );
      })}
    </li>
  );
};

export default DropdownModal;
