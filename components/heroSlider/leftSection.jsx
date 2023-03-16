import React from "react";
import styles from "./slider.module.css";

import { FaQuoteRight } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";

const LeftSection = () => {
  return (
    <div>
      <div className="scrollable-content mr-3 border-t-2 border-t-honey bg-primary text-secondary w-full leftHight shadow-hnx">
        <ul className={`${styles.dropdown_content} text-xl tracking-wider`}>
          <li className="space-x-2 py-5 px-9 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Male Enhancement</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="space-x-2 py-5 px-9 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Female Enhancement</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="space-x-2 py-5 px-9 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Liquid Shots</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Pills</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Condoms</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Rolling Paper</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Cone Paper</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          {/* <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Leopard Miracle</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Leopard Miracle</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Leopard Miracle</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
