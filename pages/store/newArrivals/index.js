import React, { useState } from "react";
import New from "./newArrival";
import categoryData from "../../../utils/newArrivals-demo-data";

const NewSection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside relative">
      <h3 className="mb-0 pt-2 pl-2">New Arrivals</h3>
      {/* <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" /> */}
      <div className="grid grid-cols-3 m-2 gap-1 justify-between md:grid-cols-3 sm:grid-cols-3">
        {category.map((item, index) => {
          return <New key={index} product={item} />;
        })}
      </div>
    </section>
  );
};

export default NewSection;
