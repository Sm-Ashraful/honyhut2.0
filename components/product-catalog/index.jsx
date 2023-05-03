import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Button from "../Button";
import ReviewStar from "../Star/index";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <section className="relative container top-2 bg-white  ">
      <div className="px-4 bg-primary py-[10px] flex shadow-md justify-start items-center">
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
      <div className="flex flex-wrap px-[5px] md:pt-5">
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
        <div className=" padding_inside w-full md:w-1/2  md:relative md:top-10 ">
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
                      $
                      {(
                        product.price -
                        (product.price * product.offer) / 100
                      ).toFixed(2)}
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
          <div className="flex justify-between items-center">
            <Button
              onClick={handleAddToCart}
              className=" text-white bg-secondary hover:text-white hover:bg-honey rounded-full shadow-hnx"
            >
              <span className="flex  items-center justify-center">
                <span className="pr-[3px]">
                  <HiOutlinePlusCircle />
                </span>
                <span>Add to Cart</span>
              </span>
            </Button>

            <Button className=" text-black   bg-honey hover:text-white hover:bg-honey rounded-full shadow-hnx">
              <Link href={`/checkout/checkout?productId=${product.id}`}>
                {/* <AiFillHeart/> */}
                <span className="flex  items-center">
                  <span className="pr-[3px]">
                    <SiShopify />
                  </span>
                  <span>Buy Now</span>
                </span>
              </Link>
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
            <p className="text-lg title-font tracking-widest text-gray-500">
              Availability:
              <span className="text-bold text-secondary"> In Stock</span>
            </p>
            <p className="text-lg title-font tracking-widest text-gray-500">
              Category:
              <span className="text-bold text-secondary">
                {product.category}
              </span>
            </p>
            <p className="text-lg title-font tracking-widest text-gray-500">
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

        <div className="w-full">
          {/* Product Information, shipping information */}
          <div className="px-5 mt-8 w-full flex justify-between bg-gray-200">
            <div className="mb-3  w-full mt-5 md:flex">
              <div className="w-full flex justify-center items-center">
                <button className="font-bold text-gray-500 hover:text-gray-600 px-4">
                  Description
                </button>
                <button className="font-bold text-gray-500 hover:text-gray-600">
                  Reviews
                </button>
              </div>
            </div>
          </div>
          {/* Product Information, shipping information end*/}

          {/* Product Information, shipping information for pc view*/}
          <hr className="w-full h-[2px] bg-gray-700 border-0 hidden md:block" />
          <div className="md:block m-4">
            <span className="">
              <h1 className="font-bold">
                Vitamax Royal Honey For Her (10 Sachets - 20 G)
              </h1>
              <p className="text-gray-500 m-4">
                Stay desirable and pleasure your partner with an enhanced
                feminine touch. Each Vitamax Royal Honey is filled with nature’s
                best herbs, bee pollen, and royal honey jelly, known to balance
                female hormones and heighten sexual energies. With 20 grams of
                decadent nectar, you’ll experience a more beautiful skin tone
                and complexion free of spots and freckles. The boost of hormones
                adds volume and shape to your breasts while increasing the
                feminine vitality within you. <br /> Whether you are
                experiencing a lack of sexual interest or an inability to enjoy
                your intimate moments, this elixir will energize you and help
                create the best memories with your partner. <br /> <br />
                <p className="pb-2">Product Benefits:</p>
                <ul className="text-xl list-disc ml-6">
                  <li>Improves sexual pleasure</li>
                  <li>Regulates menstrual cycle</li>
                  <li>Enhances sexual activity in menopausal</li>
                  <li>Tightens vaginal muscles</li>
                  <li>
                    Country of Origin:{" "}
                    <span className="font-bold">MADE IN MALAYSIA</span>
                  </li>
                </ul>
              </p>
              <h1 className="font-bold">What’s Included?</h1>
              <ul className="text-xl list-disc ml-10 text-gray-500 mb-4">
                <li>10 sachets - 20 grams Each</li>
              </ul>
              <h1 className="font-bold">Our Promise To You:</h1>
              <ul className="text-xl list-disc ml-10 text-gray-500 mb-4">
                <li>Every product we sell is %100 Authentic & Top Quality.</li>
                <li>Your Satisfaction is %100 Guaranteed or your money back.</li>
              </ul>
              <h1 className="font-bold">Shipping:</h1>
              <ul className="text-xl list-disc ml-10 text-gray-500">
                <li>Free 5 Days delivery.</li>
                <li>Express and Expedite Shipping Available.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
