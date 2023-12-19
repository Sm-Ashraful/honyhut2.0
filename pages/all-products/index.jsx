import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setViewProperty } from "@/Store/slices/globalSlice";
import { HiViewGrid } from "react-icons/hi";
import { MdViewStream } from "react-icons/md";
import CustomizedBreadcrumbs from "../../components/Update/BreadCrumbs";
import axiosInstance from "@/utils/helper/axios";
import ListView from "@/components/list-view";
import CommonCard from "@/components/CommonCard";
import Link from "next/link";
import { fetchData } from "@/utils/helper/fetchData";
import Filter from "@/components/Update/Filter";

// get data using static props
export async function getStaticProps() {
  const { products, categories } = await fetchData();

  return {
    props: {
      products,
      categories,
    },
  };
}

const AllProducts = ({ products, categories }) => {
  const dispatch = useDispatch();
  const [filterProducts, setFilterProducts] = useState(products);
  const viewProperty = useSelector((state) => state.sidebar.isViewProperty);

  const handleCategory = async (id) => {
    const filteredProducts = await axiosInstance.get(
      `/product/filter?category=${id}`
    );
    setFilterProducts(filteredProducts.data.products);
  };

  return (
    <div className="relative w-full">
      <div className=" w-full  h-full">
        <div className="w-[320px] h-full bg-white fixed left-0 hidden md:block  pt-10 border-r">
          <p className="font-bold text-xl px-7">Filter Categories</p>
          <Filter categories={categories} handleCategory={handleCategory} />
        </div>
        <div className="md:ml-[320px] padding_inside">
          <div className=" md:!pt-5 w-full text-black  flex justify-between  ">
            <CustomizedBreadcrumbs />
            <div className="flex justify-center items-center  text-2xl md:text-4xl">
              <span
                className={`border mx-[5px] md:mx-[13px] cursor-pointer ${
                  viewProperty === "grid" ? "text-black" : "text-trueGray-400"
                }`}
                onClick={() => dispatch(setViewProperty("grid"))}
              >
                <HiViewGrid className="" />
              </span>
              <span
                className={`border cursor-pointer ${
                  viewProperty === "list" ? "text-black" : "text-trueGray-400"
                }`}
                onClick={() => dispatch(setViewProperty("list"))}
              >
                <MdViewStream />
              </span>
            </div>
          </div>

          <div className="relative w-full  ">
            <div className="">
              {viewProperty === "list" ? (
                <div className="max-w-full grid  gap-[15px] md:gap-[10px] ">
                  {filterProducts?.map((product, idx) => {
                    return (
                      <Link
                        href={`/product/details/${product.slug}`}
                        key={idx}
                        className=" md:mt-5 mt-2"
                      >
                        <ListView key={idx} product={product} />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="max-w-full grid grid-cols-2 md:grid-cols-3  gap-[5px] md:gap-[10px]">
                  {filterProducts?.map((product, idx) => {
                    return (
                      <Link
                        href={`/product/details/${product.slug}`}
                        key={idx}
                        className=" md:mt-5 mt-2"
                      >
                        <CommonCard key={idx} product={product} />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
