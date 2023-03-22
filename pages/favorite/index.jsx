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

  return (
    <section className="padding_inside relative top-36 md:top-48 h-auto my-5">
      <h2 className="mb-0 w-full text-center">My Favorite Items</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5" ref={cardBoxRef}>
        {faItems.map((item, index) => {
          return (
            <Link href={`/product/${product.id}`}>
              <CommonCard key={index} product={item} percentage={`20%`} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FavSection;
