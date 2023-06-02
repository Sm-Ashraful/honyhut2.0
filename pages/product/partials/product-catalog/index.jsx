import React, { useState, useEffect, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "@/components/Button";
import ReviewStar from "@/components/Star";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";

import { HiOutlinePlusCircle } from "react-icons/hi2";

import LeftRightArrow from "@/components/common/LeftRightArrow";

import { addItemToCart } from "@/Store/cart/cart.action";
import { addItemToFav } from "@/Store/favorite/favorite.action";

import { selectCartItems } from "@/Store/cart/cart.selector";
import { selectFavItems } from "@/Store/favorite/favorite.selector";

import BtnOutlineCounter from "@/components/Button/BtnOutlineCounter";
import BtnSolid from "@/components/Button/BtnSolid";

import { useDispatch, useSelector } from "react-redux";

const ProductCatalog = ({ product }) => {
  const [count, setCount] = useState(1);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const dispatch = useDispatch();

  const imageRef = useRef(null);

  const cartItems = useSelector(selectCartItems);
  const favItems = useSelector(selectFavItems);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product, count));
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

  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = (event.pageX - left) / width;
    const y = (event.pageY - top) / height;

    imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };
  console.log("Products: ", product);

  return (
    <section className="relative bg-white  ">
      <div className="flex flex-wrap px-[5px] md:pt-5">
        <div className="relative w-screen md:w-1/2   rounded flex flex-col justify-center items-center">
          <div className="relative overflow-hidden w-full h-full">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`relative flex justify-center h-96 items-center overflow-hidden`}
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
                  <article className={`${position} `} ref={imageRef}>
                    <Image src={pic} alt={"Image"} fill cover />
                  </article>
                );
              })}
              <LeftRightArrow setIndex={setIndex} index={index} />
            </div>
          </div>
          <div className="preview z-50 hidden"></div>
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
        <div className="md:pl-12  w-full md:w-1/2  md:relative">
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <div className="mb-2">
            <span className="flex items-center">
              <ReviewStar className={`flex text-honey`} />
              <span span className="text-gray-600 ml-3">
                4 Reviews
              </span>
            </span>
          </div>
          <div>
            <p className=" font-extrabold text-2xl py-4 title-font tracking-widest">
              {typeof product.offer === "number" ? (
                <>
                  <span
                    className={`text-blue-600 ${
                      product.offer ? "line-through" : ""
                    }`}
                  >
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
            <div className="leading-relaxed ml-5 text-lg text-[#878787]">
              <ul className="list-disc">
                <li className="removeTextShadow">100% Organic Formula </li>
                <li className="removeTextShadow">100% Authentic</li>
                <li className="removeTextShadow">Top Quality Guarantee</li>
                <li className="removeTextShadow">
                  Fast Free Shipping From The US
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex items-center">
            <span className="pr-5">
              <BtnOutlineCounter count={count} setCount={setCount} />
            </span>
            <span onClick={handleAddToCart}>
              <BtnSolid
                btnText={"Add to Cart"}
                btnImage={<HiOutlinePlusCircle />}
              />
            </span>
          </div>
          <div className="flex items-center py-2 border-gray border-b-2"></div>
          <div>
            <Button
              onClick={handleFavClick}
              className=" text-black  text-xl flex items-center  rounded-full"
            >
              <AiOutlineHeart />
              <span className="px-2">Add to whitelist</span>
            </Button>
          </div>
          {/*end Product Information and button */}

          {/**Product avialibility stock information */}
          <div className="pt-8">
            <p className="text-lg title-font tracking-widest text-gray-500">
              Availability:
              <span className="text-bold text-blue-500 pl-2"> In Stock</span>
            </p>
            <p className="text-lg title-font tracking-widest text-gray-500">
              Category:
              <span className="text-bold text-blue-500 pl-2">
                {product.category}
              </span>
            </p>
            <p className="text-lg title-font tracking-widest text-gray-500">
              Brand:
              <span className="text-bold text-blue-500 pl-2">
                Royal Honey, Malaysia
              </span>
            </p>
          </div>
          {/**Product avialibility stock information end*/}
        </div>
        {/* Product Information and button end*/}
        {/* Product Information, shipping information */}

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
                <li>
                  Your Satisfaction is %100 Guaranteed or your money back.
                </li>
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
