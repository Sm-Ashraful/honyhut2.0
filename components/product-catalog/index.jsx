import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Button from "../Button";
import ReviewStar from "../Star/index";
import Image from "next/image";
import { useRouter } from "next/router";

import { SiShopify } from "react-icons/si";
import { HiOutlinePlusCircle } from "react-icons/hi2";

import LeftRightArrow from "../common/LeftRightArrow";

import { productInfo } from "../../utils/product-details";
import { FaHome } from "react-icons/fa";

import { addItemToCart } from "@/Store/cart/cart.action";
import { addItemToFav } from "@/Store/favorite/favorite.action";

import { selectCartItems } from "@/Store/cart/cart.selector";
import { selectFavItems } from "@/Store/favorite/favorite.selector";

import { useDispatch, useSelector } from "react-redux";

const ProductCatalog = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [headingText, setHeadingText] = useState("");
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const favItems = useSelector(selectFavItems);
  const router = useRouter();
  const pathName = router.pathname;
  const path = pathName.split("/");
  const removeId = path.pop();
  product && path.push(product.name);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product));
  };

  const handleFavClick = (e) => {
    e.preventDefault();
    dispatch(addItemToFav(favItems, product));
  };

  useEffect(() => {
    const lastIndex = product.image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, product]);

  return (
    <section className="relative container top-2  bg-primary">
      <div className="px-4 bg-white py-[10px] flex shadow-md justify-start items-center">
        <p className="mb-0  text-xl font-bold">
          <FaHome className="text-secondary" />
        </p>
        <p className="text-lg">
          {path.map((linkName) => {
            return (
              <span>
                <span className="mx-2"> {"/"} </span>{" "}
                <span className="capitalize underline">{linkName}</span>
              </span>
            );
          })}
        </p>
      </div>
      <div className="flex flex-wrap md:pt-5">
        <div className="relative w-screen md:w-1/2 md:overflow-hidden  rounded flex flex-col justify-center items-center md:items-start md:justify-start md:space-x-5">
          <div
            className={`relative w-full h-96  flex justify-center items-center`}
          >
            {product.image.map((pic, picIndex) => {
              let position = "nextSlide";
              if (picIndex === index) {
                position = "activeSlide";
              }
              if (product.image.length > 1) {
                if (
                  picIndex === index - 1 ||
                  (index === 0 && picIndex === product.image.length - 1)
                ) {
                  position = "lastSlide";
                }
              }
              return (
                <article className={`${position}`}>
                  <Image src={pic} alt={"Image"} fill cover />
                </article>
              );
            })}
            <LeftRightArrow setIndex={setIndex} index={index} />
          </div>

          <div className="h-44 flex flex-nowrap scroll-smooth x-scrollable-content">
            {product.image.map((pic, picIndex) => {
              return (
                <div key={picIndex} className="relative w-40 h-full ">
                  <Image src={pic} alt={"Image"} fill cover />
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Information and button */}
        <div className="padding_inside w-full md:w-1/2 space-y-3 md:relative md:top-10">
          <h3 className="text-3xl font-medium">{product.name}</h3>
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
              {typeof product.offer === "number" ? (
                <>
                  <span className={`${product.offer ? "line-through" : ""}`}>
                    ${product.price}
                  </span>
                  {product.offer && (
                    <span className="ml-5 text-primary-red">
                      ${product.price - (product.price * product.offer) / 100}
                    </span>
                  )}
                </>
              ) : (
                <span>${product.price}</span>
              )}
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
          <div className="flex justify-start items-center">
            <Button
              onClick={handleAddToCart}
              className="mr-10 text-xl text-white bg-secondary hover:text-white hover:bg-honey rounded-full shadow-hnx"
            >
              <span className="flex space-x-3 items-center">
                <span>
                  <HiOutlinePlusCircle />
                </span>
                <span>Add to Cart</span>
              </span>
            </Button>
            <Button className="mr-10 text-black  text-xl bg-honey hover:text-white hover:bg-honey rounded-full shadow-hnx">
              {/* <AiFillHeart/> */}
              <span className="flex space-x-3 items-center">
                <span>
                  <SiShopify />
                </span>
                <span>Buy Now</span>
              </span>
            </Button>
            <Button
              onClick={handleFavClick}
              className="mr-10 text-primary text-xl bg-secondary hover:text-white hover:bg-honey rounded-full shadow-hnx"
            >
              <AiFillHeart />
            </Button>
          </div>
          <div className="flex items-center py-2 border-gray border-b-2"></div>
          {/*end Product Information and button */}

          {/**Product avialibility stock information */}
          <div>
            <p className="text-lg title-font tracking-widest">
              Availability:
              <span className="text-bold text-secondary"> In Stock</span>
            </p>
            <p className="text-lg title-font tracking-widest">
              Category:
              <span className="text-bold text-secondary">
                {product.category}
              </span>
            </p>
            <p className="text-lg title-font tracking-widest">
              Brand:
              <span className="text-bold text-secondary">
                {" "}
                Royal Honey, Malaysia
              </span>
            </p>
          </div>
          {/**Product avialibility stock information end*/}
        </div>
        {/* Product Information and button end*/}

        {/* Product Information, shipping information */}
        <div className="padding_inside mt-8 w-full flex justify-between">
          <div className="mb-3  w-full mt-5 md:flex">
            {productInfo.map((info, index) => {
              return (
                <div>
                  <div
                    onClick={() =>
                      headingText !== info.title
                        ? setHeadingText(info.title)
                        : setHeadingText("")
                    }
                    className="flex justify-between items-center"
                  >
                    <h3 className="mb-0 mt-4 md:pr-10">{info.title}</h3>
                    <span>
                      <FaCaretDown className="md:hidden" />
                    </span>
                  </div>

                  <p
                    className={`${
                      headingText === info.title ? "md:hidden" : "hidden"
                    } leading-relaxed ml-5 text-lg `}
                  >
                    <ul className="list-disc">
                      {info.details.map((productDetails) => {
                        return (
                          <li>
                            <span className="text-xl font-semibold">
                              {productDetails.title}
                            </span>
                            <span>
                              {productDetails.description.map((des, idx) => {
                                return (
                                  <span className="font-light text-ash">
                                    {des.des1}
                                  </span>
                                );
                              })}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Product Information, shipping information end*/}

        {/* Product Information, shipping information for pc view*/}
        <hr className="w-full h-[2px]  bg-gray border-0 hidden md:block" />
        <div className="hidden md:block">
          {productInfo.map((info, idx) => {
            if (idx === 0 && !headingText) {
              setHeadingText(info.title);
            }
            return (
              <div className="padding_inside mt-[10px]">
                <ul className="list-disc ">
                  {info.details.map((productDetails) => {
                    return (
                      <li
                        className={`${
                          headingText === info.title ? "md:block" : "hidden"
                        } leading-relaxed ml-5 text-lg pt-5`}
                      >
                        <span className="text-lg font-bold">
                          {productDetails.title}
                          <span> - </span>
                        </span>
                        <span>
                          {productDetails.description.map((des, idx) => {
                            return (
                              <span className="font-light text-ash">
                                {des.des1}
                              </span>
                            );
                          })}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
