import React, { useState } from "react";

import { menuItem } from "../../utils/menu-item";

import MenuItems from "../Menu-items";
import Dropdown from "../Dropdown";

import styles from "./style.module.css";

const DropdownNavbar = () => {
  const depthLevel = 0;
  return (
    <nav
      className={`${styles.nav_container} h-full z-50 border-t-2 border-t-honey bg-primary text-secondary leftHight relative`}
    >
      <ul className={`text-xl`}>
        {menuItem.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default DropdownNavbar;
