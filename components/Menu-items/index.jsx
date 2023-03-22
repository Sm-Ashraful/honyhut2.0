import React, { useEffect, useState } from "react";

import Dropdown from "../Dropdown";

const MenuItems = ({ items, depthLevel, onHover }) => {
  const [dropdown, setDropdown] = useState(false);


  return (
    <li
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className="py-5 px-9  w-full h-full flex items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx"
    >
      <button type="button">{items.title}</button>
      <Dropdown
        submenus={items.submenu}
        depthLevel={depthLevel}
        dropdown={dropdown}
      />
    </li>
  );
};

export default MenuItems;
