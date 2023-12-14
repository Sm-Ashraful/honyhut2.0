import React, { useEffect, useState } from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import axiosInstance from "@/utils/helper/axios";
import Link from "next/link";

export default function MenuCategory() {
  const [categories, setCategory] = useState([]);
  const [headingText, setHeadingText] = useState("");
  useEffect(() => {
    async function fetchCategory() {
      const response = await axiosInstance.get("/category/getcategory");
      setCategory(response.data.categoryList);
    }
    fetchCategory();
  }, []);
  const handleHeadingClick = (category, e) => {
    e.preventDefault();
    return headingText !== category.name
      ? setHeadingText(category.name)
      : setHeadingText("");
  };
  return (
    <div>
      <ul>
        {categories.map((category, idx) => {
          return (
            <div className="mt-3" key={idx}>
              <div className="px-5 pt-4 font-bold text-xl flex justify-between items-center">
                <div className="flex justify-center items-center gap-[10px]">
                  <Link href={`/product/category-page/${category.name}`}>
                    <p className="font-bold capitalize text-[1.5rem]">
                      {category.name}
                    </p>
                  </Link>
                </div>
              </div>
              <div className={``}>
                <div className="text-[1.2rem]">
                  {category?.children.map((subLinks, index) => {
                    return (
                      <div>
                        <li>
                          <div className="py-3 pl-8 font-semibold  flex justify-between item-center ">
                            <Link
                              href={`/product-categories/${subLinks.name}`}
                              className="flex justify-center items-center gap-[10px]"
                            >
                              <div>
                                <p className="font-bold capitalize ">
                                  {subLinks.name}
                                </p>
                              </div>
                            </Link>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
