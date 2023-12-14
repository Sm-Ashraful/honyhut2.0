import React, { useState, useEffect } from "react";
import ProCategory from "../../components/product-Categories";
import FilterProducts from "@/components/all-products";
import { allProducts } from "@/utils/all-product";
import { useRouter } from "next/router";

import HeroTop from "@/components/common/top-component";
import { useSelector } from "react-redux";
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

const ProductsCategory = ({ categoryData, productData }) => {
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
                <Link href={`/product/${item._id}`}>
                  <Card
                    key={idx}
                    image={
                      item.image ? item.image[0] : item.productPictures[1].url
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
