import React, { useState, useEffect } from "react";
import Dart from "../../../../Assets/dart.svg";
import shild from "../../../../Assets/shield.svg";
import Image from "next/image";

const HeaderMain = () => {
  const [nav, setNav] = useState("");
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200 && window.innerWidth < 768) {
        setNav("fixed top-0 left-0 ");
      } else if (currentScrollY > 200) {
        setNav("fixed top-0 left-0");
      } else {
        setNav("");
      }

      // Update the previous scroll position with the current one
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`padding_inside flex gap-20 items-center bg-white ${nav} z-50 min-w-full`}
    >
      {/** Logo part*/}
      <div
        className={`w-[9rem] md:w-[11rem] flex justify-center items-center py-5`}
      >
        <a href="/" className="w-full">
          <img src={"/honeyhut logo.png"} alt={"Image"} className="w-full" />
        </a>
      </div>
      {/**Search Bar*/}
      <div className="flex-1">
        <form className="w-full">
          <div class="flex w-full border-[2px] border-secondary rounded-full overflow-hidden">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white hover:bg-gray-200"
              type="button"
            >
              All categories{" "}
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 focus:outline-none"
                placeholder="I'm looking for ..."
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 py-2.5 px-6 text-sm font-medium h-full text-white bg-secondary "
              >
                <span class="">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/** rest things*/}
      <div className="w-1/5 hidden md:flex justify-center items-center">
        <div className="flex">
          <div className="relative">
            <Image src={Dart} alt={"name"} width={40} height={40} />
          </div>
          <p className="text-sm">Request for Quotations</p>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <Image src={shild} alt={"name"} width={40} height={40} />
          </div>
          <p> Order</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
