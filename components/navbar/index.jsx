import React, { useState } from "react";

import categories from "@/utils/category-demo-data";

import MenuItems from "../Menu-items";

const DropdownNavbar = () => {
  const depthLevel = 0;
  return (
    <nav
      className={`w-[22.5vw] h-auto z-50 border-t-2 border-t-honey bg-secondary text-black  relative`}
    >
      <ul>
        {categories.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default DropdownNavbar;
