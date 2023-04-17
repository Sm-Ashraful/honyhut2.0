import React, { useState } from "react";
import Gallery from "./gallery";
import categoryData from "../../utils/gallery-demo-data";

const GallerySection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside relative top-36 md:top-48">
      <h2 className="mb-0 text-center text-primary-red">This Week's Best Selling Products</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div className="grid grid-cols-1 m-5 gap-1 justify-between md:grid-cols-3 sm:grid-cols-3">
        {category.map((item, index) => {
          return (
            <Gallery
              key={index}
              name={item.name}
              image={item.image}
              quote={item.quote}
              cardType="category"
            />
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
