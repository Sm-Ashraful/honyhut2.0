import React from "react";

import FilterProducts from "@/components/all-products";

import { fetchCategoryData, fetchProductData } from "@/utils/helper/fetchData";
import Card from "@/components/Update/Card";
import Link from "next/link";

export async function getServerSideProps(context) {
  let categoryData = null;
  let productData = null;

  try {
    const category = encodeURIComponent(context.params.categoryName);
    categoryData = await fetchCategoryData(category);

    // Fetch product data for the parent category
    productData = await fetchProductData(categoryData.category._id);

    return {
      props: {
        categoryData,
        productData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { categoryData },
    };
  }
}

const ProductsCategory = ({ productData }) => {
  return (
    <div className="relative w-full ">
      <div>
        {/**<HeroTop title={categoryData.category.name} /> */}
        <div className="md:grid w-full md:gap-[10px] h-full relative padding_inside">
          <div className="w-full">
            <FilterProducts />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-5">
            {productData.map((item, idx) => {
              return (
                <Link href={`/product/details/${item.slug}`}>
                  <Card
                    key={idx}
                    image={
                      item.image ? item.image[0] : item?.productPictures[0].url
                    }
                    name={item.name}
                    MOQ={item?.MOQ}
                    price={item.price}
                    typo={item.typo}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
{
  /**  */
}
