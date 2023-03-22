import React, { useState, useEffect } from "react";
import Gallery from "../gallery";
import Card from "../Card";

import people from "../../utils/data-demo";
import CommonCard from "../CommonCard";

const RecommendProduct = ({ top, className }) => {
  return (
    <section
      className={`padding_inside relative ${
        top ? `top-${top}` : `top-36 md:top-48 `
      }`}
    >
      <h2 className="mb-0 ">JUST FOR YOU</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div
        className={`${
          className ? `${className}` : `grid grid-cols-2 md:grid-cols-4 gap-5`
        } `}
      >
        {people.map((item, index) => {
          return <CommonCard product={item} percentage={"Hot"} />;
        })}
      </div>
    </section>
  );
};

export default RecommendProduct;
