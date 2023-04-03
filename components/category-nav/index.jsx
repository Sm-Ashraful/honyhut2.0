import React, { useState } from "react";

import { menuItem } from "../../utils/menu-item";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Link from "next/link";

const CategoryNav = () => {
  const [headingText, setHeadingText] = useState("");
  const [subHeadingText, setSubHeadingText] = useState("");

  return (
    <nav className={`text-xl overflow-y-auto`}>
      <ul>
        {menuItem.map((menus, index) => {
          return (
            <div className="overflow-y-scroll">
              <div>
                <p
                  className="px-5 pt-4 font-bold text-xl flex justify-between items-center"
                  onClick={() =>
                    headingText !== menus.title
                      ? setHeadingText(menus.title)
                      : setHeadingText("")
                  }
                >
                  {menus.title}
                  <span>
                    {headingText === menus.title ? (
                      <TiArrowSortedUp />
                    ) : (
                      <TiArrowSortedDown />
                    )}
                  </span>
                </p>

                <div
                  className={`${
                    headingText === menus.title ? "md:hidden" : "hidden"
                  }`}
                >
                  <div>
                    {menus.submenu.map((subLinks, index) => {
                      return (
                        <div>
                          <li>
                            <p
                              onClick={() =>
                                subHeadingText !== subLinks.title
                                  ? setSubHeadingText(subLinks.title)
                                  : setSubHeadingText("")
                              }
                              className="py-3 pl-14 font-semibold  text-primary-red border-b-2 flex justify-between item-center px-5"
                            >
                              {subLinks.title}
                              <span>
                                {subHeadingText === subLinks.title ? (
                                  <TiArrowSortedUp />
                                ) : (
                                  <TiArrowSortedDown />
                                )}
                              </span>
                            </p>
                          </li>
                          <div
                            className={`${
                              subHeadingText === subLinks.title
                                ? "md:hidden"
                                : "hidden"
                            }`}
                          >
                            <div className="flex flex-col duration-500">
                              {subLinks.submenu &&
                                subLinks.submenu.map((subLink) => {
                                  return (
                                    <Link
                                      href={`/brand-name/${subLink.title}`}
                                      className="py-1 pl-20 text-black"
                                    >
                                      {subLink.title}
                                    </Link>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryNav;
