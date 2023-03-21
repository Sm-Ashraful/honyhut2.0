import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSelector } from "react-redux";

import { menuItem } from "../../utils/menu-item";
import MobilMenuItems from "./mobilMenuItems";
import styles from "./category-nav.module.css";

const CategoryNav = () => {
  const depthLevel = 0;
  return (
    <nav className={`${styles.table_content} text-xl`}>
      <ul className="grid">
        {menuItem.map((menu, index) => {
          return (
            <MobilMenuItems items={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryNav;
