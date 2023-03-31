import Link from "next/link";
import React from "react";

const DropdownModal = ({ items }) => {
  return (
    <li className="flex flex-col text-lg leading-6 pt-5 flex-wrap">
      {items.submenu.map((menuLink, index) => {
        return (
          <Link
            href={`/brand-name/${menuLink.title}`}
            style={{ paddingTop: "3px" }}
          >
            {menuLink.title}
          </Link>
        );
      })}
    </li>
  );
};

export default DropdownModal;
