import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { MdCategory } from "react-icons/md";

import { setViewProperty } from "@/Store/slices/globalSlice";
import { HiViewGrid } from "react-icons/hi";
import { MdViewStream } from "react-icons/md";
import CustomizedBreadcrumbs from "../../components/Update/BreadCrumbs";
import axiosInstance from "@/utils/helper/axios";
import ListView from "@/components/list-view";
import CommonCard from "@/components/CommonCard";
import Link from "next/link";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { fetchData } from "@/utils/helper/fetchData";

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

  const handleCategory = async (slug) => {
    const filterProducts = await axiosInstance.get(`/products/slug/${slug}`);
    setFilterProducts(filterProducts.data.products);
  };

  return (
    <div className="relative w-full">
      <div className=" w-full  h-full">
        <div className="w-[320px] h-full bg-white fixed left-0 hidden md:block  pt-10 border-r">
          <p className="font-bold text-xl px-7">Categories</p>
          <div>
            {categories.map((category, idx) => {
              return (
                <div className="border-b">
                  <div
                    key={idx}
                    className="flex justify-between items-center px-5 py-3 "
                  >
                    <div className="flex items-center">
                      <MdCategory />
                      <p className="ml-2">{category.name}</p>
                    </div>
                    <div className="text-xl text-customTheme">
                      <BsFillArrowRightSquareFill />
                    </div>
                  </div>
                  <ul>
                    {category.children.map((child, idx) => {
                      return (
                        <li
                          className="flex items-center ml-10 pb-2"
                          onClick={() => handleCategory(child.slug)}
                        >
                          <p>
                            <input type="checkbox" className="mr-2" />
                          </p>
                          <Link href={"#"} className="">
                            {child.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:ml-[320px] padding_inside">
          <div className="!py-[10px] md:!py-5 w-full text-black  flex justify-between  ">
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
            <div className="pt-3 md:pt-5">
              {viewProperty === "list" ? (
                <div className="max-w-full grid  gap-[15px] md:gap-[10px] ">
                  {filterProducts.map((product, idx) => {
                    return (
                      <Link
                        href={`/product/${product._id}`}
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
                  {filterProducts.map((product, idx) => {
                    return (
                      <Link
                        href={`/product/${product._id}`}
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
