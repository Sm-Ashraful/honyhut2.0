import React, { useState } from "react";
import { IoCall, IoMailSharp } from "react-icons/io5";
import categoryData from "@/utils/category-demo-data";

import Link from "next/link";

import styles from "../Header/style.module.css";

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Category demo: ", categoryData);

  return (
    <footer className="bg-honey text-black  relative top-36 md:top-48 mb-56 md:mb-48 text-lg font-carmo">
      <div className="md:flex justify-between items-start md:pt-11 padding_inside">
        <div className="p-5 ">
          <h4 className="text-center from-left md:text-left text-primary">
            SHOP
          </h4>

          <div className="pt-2 tracking-wider cursor-pointer">
            {categoryData.map((category, idx) => {
              return (
                <Link key={idx} href={`/product-categories/${category.name}`}>
                  <p>{category.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="p-5 ">
          <h4 className="text-center from-right md:text-left text-primary">
            Customer Care
          </h4>

          <div className="pt-2 tracking-wider cursor-pointer">
            <p>Contact Us</p>
            <p>Helps</p>
            <p>Uses Instruction</p>
            <p>Shipping Policy</p>
            <p>Return Policy</p>
          </div>
          <div className="pt-8">
            <p>Customer service: + 46 (10) 7502423</p>
          </div>
        </div>

        <div className="p-5 tracking-wider cursor-pointer">
          <h4 className="text-center from-left md:text-left text-primary">
            Links
          </h4>

          <div className="pt-2 tracking-wider cursor-pointer">
            <p className="">About US</p>
            <p className="">Privacy Policy</p>
            <p className="">Terms & Conditions</p>
          </div>
        </div>
        <div className="p-5 ">
          <h4 className="text-center from-left md:text-left text-primary">
            HONYHUT - for Mens and Women Enhancement
          </h4>
          <div className="pt-2">
            <p className=" md:max-w-lg">
              Honyhut was founded in 2006 with vision of building the best
              online store in the Nordics for children clothing. We want to
              inspire by offering an exclusive shopping experience and excellent
              customer service with the best mixture of high-quality brands.
            </p>
          </div>
          <ul className="flex">
            <li>
              <a href="#">facebook icon here</a>
            </li>
            <li>
              <a href="#">Instagram icon </a>
            </li>
            <li>
              <a href="#">Google</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary px-0">
        <p className="text-center py-4 text-black">
          Copyright Notice &copy; 2015-2023 HK YIYING and/or its affiliates and
          licensors. All right reserve 2023 &trade;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
