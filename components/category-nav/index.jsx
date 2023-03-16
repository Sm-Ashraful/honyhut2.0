import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./category-nav.module.css";

const CategoryNav = () => {
  return (
    <nav className={`${styles.table_content} text-xl`}>
      <ul className="grid">
        <li
          className={`py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer`}
        >
          <a>Honey</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Male enhancement</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Female enhancement</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Rolling Paper</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Condoms</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className=" py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Pills</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Rolling Paper</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Condoms</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Rolling Paper</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
        <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
          <a>Condoms</a>
          <span>
            <TiArrowSortedDown className="text-secondary" />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNav;
