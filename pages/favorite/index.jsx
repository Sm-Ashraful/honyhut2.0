import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import CommonCard from "../../components/CommonCard";
import productData from "../../utils/fav-demo-data.js";

import { selectFavItems } from "../../Store/favorite/favorite.selector";
import { useSelector } from "react-redux";

const FavSection = () => {
  const [product, setProduct] = useState(productData);
  const cardBoxRef = useRef(null);
  const faItems = useSelector(selectFavItems);
  const [data, setData] = useState(faItems);

  useEffect(() => {
    setData(faItems);
  }, [faItems]);

  return (
    <section className="padding_inside relative top-[8.09rem] md:top-[9.4rem] lg:top-[9.3rem] h-auto my-5">
      <h2 className="mb-0 w-full text-center">My Favorite Items</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      {faItems.length === 0 ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h3 className="text-gray">Your Favorite Item Is Empty </h3>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5" ref={cardBoxRef}>
          {faItems.map((item, index) => {
            return (
              <Link href={`/product/${product.id}`}>
                <CommonCard key={index} product={item} percentage={`20%`} />
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FavSection;
