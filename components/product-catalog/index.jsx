import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus, FaCaretDown } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Button from "../Button";
import ReviewStar from "../Star/index";
import Image from "next/image";

import { SiShopify } from "react-icons/si";
import { HiOutlinePlusCircle } from "react-icons/hi2";

import photo from "../../public/Products/Gold Honey/Gold Honey(3).jpeg";
import photo2 from "../../public/Products/Gold Honey/Gold Honey(2).jpeg";
import photo3 from "../../public/Products/Gold Honey/Gold Honey(5).jpeg";
import photo4 from "../../public/Products/Gold Honey/Gold Honey(7).jpeg";
import photo5 from "../../public/Products/Gold Honey/Gold Honey.jpeg";
import LeftRightArrow from "../common/LeftRightArrow";

const ProductCatalog = ({ props }) => {
  console.log(props);
  const [index, setIndex] = useState(0);

  const images = [props.image, photo2, photo3, photo4, photo5];

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);
  return (
    <section className="relative container top-2  bg-white">
      <div className="flex flex-wrap">
        <div className="relative w-screen md:w-1/2 md:overflow-hidden  rounded flex flex-col justify-center items-center md:items-start md:justify-start md:space-x-5">
          <div
            className={`relative w-full h-96  flex justify-center items-center`}
          >
            {images.map((pic, picIndex) => {
              let position = "nextSlide";
              if (picIndex === index) {
                position = "activeSlide";
              }
              if (
                picIndex === index - 1 ||
                (index === 0 && picIndex === images.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={`${position}`}>
                  <Image src={pic} fill cover />
                </article>
              );
            })}
            <LeftRightArrow setIndex={setIndex} index={index} />
          </div>

          <div className="h-44 flex flex-nowrap scroll-smooth x-scrollable-content">
            {images.map((pic, picIndex) => {
              return (
                <div key={picIndex} className="relative w-40 h-full ">
                  <Image src={pic} fill cover />
                </div>
              );
            })}
          </div>
        </div>
        {/* Product Information and button */}
        <div className="padding_inside w-full md:w-1/2 space-y-3 md:relative md:top-10">
          <h3 className="text-3xl font-medium">{props.name}</h3>
          <div className="mb-2">
            <span className="flex items-center">
              <ReviewStar className={`flex text-honey`} />
              <span span className="text-gray-600 ml-3">
                4 Reviews
              </span>
            </span>
          </div>
          <div>
            <p className="text-lg font-bold tracking-widest ">
              12 Sachet Per Box, 48 Box Per Carton
            </p>
            <p className=" font-extrabold text-2xl py-4 title-font tracking-widest">
              $27
            </p>
            <p className="leading-relaxed ml-5 text-lg text-gray">
              <ul className="list-disc">
                <li>100% Organic Formula </li>
                <li>Sugar & Caffeine FREE</li>
                <li>100% Authentic</li>
                <li>Top Quality Guarantee</li>
                <li>Fast Free Shipping From The US</li>
              </ul>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Button className=" text-white bg-honey hover:text-white hover:bg-honey rounded-full shadow-hnx">
              <span className="flex space-x-3 items-center">
                <span>
                  <HiOutlinePlusCircle />
                </span>
                <span>Add to Cart</span>
              </span>
            </Button>
            <Button className="text-black bg-primary hover:text-white hover:bg-honey rounded-full shadow-hnx">
              {/* <AiFillHeart/> */}
              <span className="flex space-x-3 items-center">
                <span>
                  <SiShopify />
                </span>
                <span>Buy Now</span>
              </span>
            </Button>
            <Button className="text-primary text-xl bg-secondary hover:text-white hover:bg-honey rounded-full shadow-hnx">
              <AiFillHeart />
            </Button>
          </div>
          <div className="flex items-center py-2 border-gray border-b-2"></div>
          {/*end Product Information and button */}
          {/**Product Description and */}
          <div>
            <p className="text-lg title-font tracking-widest">
              Availability:
              <span className="text-bold text-secondary"> In Stock</span>
            </p>
            <p className="text-lg title-font tracking-widest">
              Category:
              <span className="text-bold text-secondary">
                {" "}
                {props.category}
              </span>
            </p>
            <p className="text-lg title-font tracking-widest">
              Brand:
              <span className="text-bold text-secondary">
                {" "}
                Royal Honey, Malaishia
              </span>
            </p>
          </div>
        </div>
        <div className="padding_inside mt-8 md:w-full md:flex justify-start md:space-x-5">
          <div className="mb-3 md:mb-0">
            <div className="flex justify-between items-center md:border-x-2 md:px-5 md:bg-gray md:pt-5">
              <h3>Product Details</h3>
              <FaCaretDown className="md:hidden" />
            </div>
            <p className="leading-relaxed ml-5 text-lg md:hidden">
              <span className="text-2xl">
                Royal Honey For Men – Gold (12 Sachets – 20 G)
              </span>
              <ul className="list-disc">
                <li>
                  <span className="text-lg font-bold">
                    Sexual Stimulant<span> - </span>
                    <span className="font-light text-ash">
                      Get the most out of your orgasms. Royal honey increases
                      arousal, physical pleasure, and leads to a more intense
                      climax every time.
                    </span>
                  </span>
                </li>
                <li>
                  <span className="text-lg font-bold">
                    Fast Acting & Long Lasting<span> - </span>
                    <span className="font-light text-ash">
                      With the Pink Pussycat, less is more. One sachet will give
                      you the results you want for longer than you might expect;
                      sensations last up to 72 hours!
                    </span>
                  </span>
                </li>
                <li>
                  <span className="text-lg font-bold">
                    Better Lubrication<span> - </span>
                    <span className="font-light text-ash">
                      Royal honey promotes natural vaginal lubrication to ensure
                      comfort and pleasure.
                    </span>
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-3 md:mb-0">
            <div className="flex justify-between items-center  md:px-5  md:pt-5">
              <h3>Additional Information</h3>
              <FaCaretDown className="md:hidden" />
            </div>
            <p className="hidden md:hidden leading-relaxed ml-5 text-lg ">
              <span className="text-2xl">
                Royal Honey For Men – Gold (12 Sachets – 20 G)
              </span>
              <ul className="list-disc">
                <li>
                  <span className="text-lg font-bold">
                    Sexual Stimulant<span> - </span>
                    <span className="font-light text-ash">
                      Get the most out of your orgasms. Royal honey increases
                      arousal, physical pleasure, and leads to a more intense
                      climax every time.
                    </span>
                  </span>
                </li>
                <li>
                  <span className="text-lg font-bold">
                    Fast Acting & Long Lasting<span> - </span>
                    <span className="font-light text-ash">
                      With the Pink Pussycat, less is more. One sachet will give
                      you the results you want for longer than you might expect;
                      sensations last up to 72 hours!
                    </span>
                  </span>
                </li>
                <li>
                  <span className="text-lg font-bold">
                    Better Lubrication<span> - </span>
                    <span className="font-light text-ash">
                      Royal honey promotes natural vaginal lubrication to ensure
                      comfort and pleasure.
                    </span>
                  </span>
                </li>
              </ul>
            </p>
          </div>

          <div className="mb-3 md:mb-0">
            <div className="flex justify-between items-center  md:px-5  md:pt-5">
              <h3>Shipping Details</h3>
              <FaCaretDown className="md:hidden" />
            </div>
            <p className="md:hidden hidden leading-relaxed ml-5 text-lg ">
              <span className="text-2xl">
                Royal Honey For Men – Gold (12 Sachets – 20 G)
              </span>
              <ul className="list-disc">
                <li>
                  <p className="text-lg font-bold">
                    Sexual Stimulant<span> - </span>
                    <span className="font-light text-ash">
                      Get the most out of your orgasms. Royal honey increases
                      arousal, physical pleasure, and leads to a more intense
                      climax every time.
                    </span>
                  </p>
                </li>
                <li>
                  <p className="text-lg font-bold">
                    Fast Acting & Long Lasting<span> - </span>
                    <span className="font-light text-ash">
                      With the Pink Pussycat, less is more. One sachet will give
                      you the results you want for longer than you might expect;
                      sensations last up to 72 hours!
                    </span>
                  </p>
                </li>
                <li>
                  <p className="text-lg font-bold">
                    Better Lubrication<span> - </span>
                    <span className="font-light text-ash">
                      Royal honey promotes natural vaginal lubrication to ensure
                      comfort and pleasure.
                    </span>
                  </p>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex items-center w-full border-gray border-b-2"></div>
        <div className="hidden md:block padding_inside my-10">
          <p className="leading-relaxed ml-5">
            <p className="text-2xl font-extrabold">
              Royal Honey For Men – Gold (12 Sachets – 20 G)
            </p>
            <ul className="list-disc ml-5">
              <li>
                <p className="text-lg font-bold">
                  Sexual Stimulant<span> - </span>
                  <span className="font-light text-ash">
                    Get the most out of your orgasms. Royal honey increases
                    arousal, physical pleasure, and leads to a more intense
                    climax every time.
                  </span>
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">
                  Fast Acting & Long Lasting<span> - </span>
                  <span className="font-light text-ash">
                    With the Pink Pussycat, less is more. One sachet will give
                    you the results you want for longer than you might expect;
                    sensations last up to 72 hours!
                  </span>
                </p>
              </li>
              <li>
                <span className="text-lg font-bold">
                  Better Lubrication<span> - </span>
                  <span className="font-light text-ash">
                    Royal honey promotes natural vaginal lubrication to ensure
                    comfort and pleasure.
                  </span>
                </span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
