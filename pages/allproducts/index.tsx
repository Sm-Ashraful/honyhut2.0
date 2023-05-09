import FilterProducts from "../../components/all-products";
import MaleProducts from "../../components/all-products/maleProduct";
import { useRouter } from "next/router";

import { allProducts } from "../../utils/all-product";
import { FaHome } from "react-icons/fa";

const AllProducts = () => {
  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");
  return (
    <div className="relative w-full top-[110px] md:top-[153px] ">
      <div className=" w-full gap-[10px] h-full relative">

        <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[10px] flex justify-start items-center shadow-md">
          <p className="mb-0 text-xxl text-white text-center w-full">
          SEXUAL ENHANCEMENT
          </p>
        </div>

        <div className="md:px-[10rem]">
        <div className="w-full  md:mr-0 md:block col-span-1 z-0 pt-[20px]">
          <FilterProducts />
        </div>

        <div className="col-span-3 relative w-full">
          {allProducts.map((category, idx) => {
            return <MaleProducts category={category} key={idx} />;
          })}
        </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
