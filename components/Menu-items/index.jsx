import React, { useEffect, useState } from "react";
import Image from "next/image";

import Dropdown from "../Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className="py-5 px-9  w-full h-full flex items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx"
    >
      <div className="flex justify-center items-center gap-[10px]">
        <div className="relative w-[40px] h-[40px]">
          <Image src={items.image} fill cover />
        </div>
        <div>
          <p className="font-bold capitalize text-[1.4rem]">{items.name}</p>
          <p className="text-sm text-tertiary">
            {items.subCategory.length} subcategories, {items.totalItem} products
          </p>
        </div>
      </div>

      <Dropdown
        subCategory={items.subCategory}
        depthLevel={depthLevel}
        dropdown={dropdown}
      />
    </li>
  );
};

export default MenuItems;
