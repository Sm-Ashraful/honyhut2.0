import React, { useState } from "react";
import Hot from "./hotProduct";
import categoryData from "../../../utils/newArrivals-demo-data";

const NewSection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside relative rounded">
      <h3 className="mb-0 pt-2 pl-2">Hot Products</h3>
      {/* <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" /> */}
      <div className="grid grid-cols-3 m-2 gap-2 justify-between md:grid-cols-3 sm:grid-cols-3">
        {category.map((item, index) => {
          return <Hot key={index} product={item} />;
        })}
      </div>
    </section>
  );
};

export default NewSection;
