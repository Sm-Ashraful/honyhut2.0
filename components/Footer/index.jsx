import React, { useState } from "react";
import categoryData from "@/utils/category-demo-data";

import Link from "next/link";

import styles from "../Header/style.module.css";

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <footer className="bg-honey text-black  relative top-36 md:top-48 mb-56 md:mb-48 text-lg font-carmo">
      <div className="md:flex justify-between items-start md:pt-11 padding_inside">
        <div className="p-5 ">
          <h4 className="text-center from-left md:text-left text-primary">
            SHOP
          </h4>

          <ul className="pt-2 tracking-wider cursor-pointer">
            {categoryData.map((category, idx) => {
              return (
                <li>
                  <Link key={idx} href={`/product-categories/${category.name}`}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-5 ">
          <h4 className="text-center from-right md:text-left text-primary">
            Customer Care
          </h4>

          <ul className="pt-2 tracking-wider cursor-pointer ">
            <li className="hover:text-primary hover:underline">
              <Link href="/contact/contact-us">Contact Us</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href="/help/faqs">FAQs</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href={"/uses-instruction"}>Uses Instruction</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href={"/shipping-policy"}>Shipping Policy</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href={`/return-policy`}>Return Policy</Link>
            </li>
          </ul>
          <div className="pt-8">
            <p>Customer service: + 46 (10) 7502423</p>
          </div>
        </div>

        <div className="p-5 tracking-wider cursor-pointer">
          <h4 className="text-center from-left md:text-left text-primary">
            Links
          </h4>

          <ul className="pt-2 tracking-wider cursor-pointer">
            <li>
              <Link href="/about" className="">
                About US
              </Link>
            </li>

            <li className="">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="">
              <Link href="/terms-and-condition">Terms & Conditions</Link>
            </li>
          </ul>
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
          <ul className="flex items-center py-5">
            <li className="w-[25px] h-[25px] mr-[15px] rounded-full bg-primary  flex justify-center items-center p-5">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="16"
                  height="16"
                  fill="#3b5998"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </li>
            <li className="w-[25px] h-[25px] mx-[15px] rounded-full bg-primary  flex justify-center items-center p-5">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#d62976"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                </svg>
              </a>
            </li>
            <li className="w-[25px] h-[25px] mx-[15px] rounded-full bg-primary  flex justify-center items-center p-5">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#4285F4"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                </svg>
              </a>
            </li>
            <li className="w-[25px] h-[25px] mx-[15px] rounded-full bg-primary  flex justify-center items-center p-5 ">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#00acee"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </a>
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
