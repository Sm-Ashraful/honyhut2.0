import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import Card from "../../components/Card";
import productData from "../../utils/fav-demo-data.js";

const FavSection = () => {
  const [product, setProduct] = useState(productData);
  const cardBoxRef = useRef(null);


  return (
    <section className="padding_inside relative top-36 md:top-48 h-auto my-5">
      <h2 className="mb-0 ">Favorite Items</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div
        className="flex items-center gap-3 justify-between p-6 scroll-smooth x-scrollable-content rounded-md"
        ref={cardBoxRef}
      >
        {product.map((item, index) => {
          return (
            <Link href={`/product/${product.id}`}>
              <Card
                key={index}
                name={item.name}
                image={item.image}
                category={item.category}
                quote={item.quote}
                quantity={item.quantity}
                price={item.price}
                percentage={`20%`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FavSection;
