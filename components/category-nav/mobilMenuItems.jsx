import React, { useEffect, useState } from "react";

import { TiArrowSortedDown } from "react-icons/ti";

import Dropdown from "./dropdown";

const MobilMenuItems = ({ items, depthLevel, onHover }) => {
  const [dropdown, setDropdown] = useState(false);

  // console.log("item: ", items.submenu, items, onHover);
  // console.log(items.submenu.length, depthLevel);
  useEffect(() => {
    console.log("DropDown: ", dropdown);
  }, [dropdown]);

  const clickHandler = () => {
    setDropdown(!dropdown);
  };

  return (
    <li
      onClick={clickHandler}
      className="py-5 px-9  w-full h-full flex items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx relative"
    >
      {items.submenu ? (
        <>
          <div
            aria-expanded={dropdown ? "true" : "false"}
            className="w-full  flex justify-between items-center cursor-pointer"
          >
            <span>{items.title}</span>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </div>
          <Dropdown
            submenus={items.submenu}
            depthLevel={depthLevel}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a>{items.title}</a>
      )}
    </li>
  );
};

export default MobilMenuItems;
