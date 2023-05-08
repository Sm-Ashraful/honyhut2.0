import React, { useState } from "react";
import { IoCall, IoMailSharp } from "react-icons/io5";

import styles from "../Header/style.module.css";

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <footer className="bg-honey text-black  relative top-36 md:top-48 mb-56 md:mb-48 text-lg">
      <div className="md:flex justify-between items-start md:pt-11 padding_inside">
        <div className="p-5 ">
          <h4 className="text-center from-left md:text-left">
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
          <form
            className={`relative w-full flex items-center pl-3 bg-white focus-within:border focus-within:border-secondary  md:flex-1 basis-full m-3 md:order-2`}
          >
            <div className={`${styles.search_icon}`}></div>
            <div className="grow">
              <input
                type="text"
                placeholder={`What are you looking for today ...`}
                className="appearance-none bg-white  text-base pl-10 py-4 pr-12 w-full focus:outline-none"
                value={searchTerm}
              />
            </div>
          </form>
        </div>
        <div className="p-5 ">
          <h4 className="text-center from-left md:text-left">Information</h4>

          <div className="pt-2 underline">
            <p>About Honey Hut</p>
            <p>Gift Card</p>
            <p>Sustainability</p>
            <p>Career</p>
            <p>Delivery Terms</p>
            <p>Register Return Online</p>
            <p>Cookies</p>
            <p>Integrity Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="p-5 ">
          <h4 className="text-center from-right md:text-left">
            Customer Services
          </h4>

          <div className="pt-2 underline">
            <p>Returns & Exchange</p>
            <p>FAQs</p>
            <p>Payment Methods</p>
            <p>Contact Us</p>
          </div>
          <div className="pt-8">
            <p>Customer service: + 46 (10) 7502423</p>
          </div>
        </div>

        <div className="p-5">
          <h4 className="text-center from-left md:text-left">Contact Us</h4>

          <div className="pt-2">
            <p className="flex space-x-1 items-center">
              <IoCall />
              <span className="underline">+991 0123 4567 89</span>
            </p>
            <p className="flex space-x-1 items-center">
              <IoMailSharp />
              <span className="underline">chickyhoney@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary px-0">
        <p className="text-center py-4 text-black">
          Copyright Notice &copy; 2015-2023 Mitali International Limited and/or
          its affiliates and licensors. All right reserve 2023 &trade;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
