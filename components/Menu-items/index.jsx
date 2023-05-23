import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

import Dropdown from "../Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className="py-5 px-9 border-y  w-full h-auto flex items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx"
    >
      <div className="flex justify-center items-center gap-[10px] font-semibold w-full">
        <div className="flex w-full justify-between items-center">
          <p>
            <Link
              href={`/product-categories/${items.name}`}
              className="uppercase text-sm"
            >
              {items.name}
            </Link>
          </p>
          {items.subCategory && (
            <p className="text-end">
              <BiChevronRight />
            </p>
          )}
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
