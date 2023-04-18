import React, { useState } from "react";

import categories from "@/utils/category-demo-data";

import MenuItems from "../Menu-items";

const DropdownNavbar = () => {
  const depthLevel = 0;
  return (
    <nav
      className={`w-[20vw] h-auto z-50 border-t-2 border-t-honey bg-primary text-secondary leftHight relative`}
    >
      <ul className={`text-xl`}>
        {categories.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default DropdownNavbar;
