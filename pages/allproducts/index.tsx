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
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem] md:px-[4rem]">
      <div className=" w-full gap-[10px] h-full relative">
        <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[10px] flex justify-start items-center shadow-md">
          <p className="mb-0 text-xxl text-white text-center w-full">
            SEXUAL ENHANCEMENT
          </p>
        </div>

        <div>
          <div className="w-full">
            <FilterProducts />
          </div>

          <div className="relative w-full">
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
