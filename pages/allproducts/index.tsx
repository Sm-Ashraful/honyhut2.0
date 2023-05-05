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
    <div className="relative top-36 md:top-52 md:px-4">
      <div className=" w-full gap-[10px] h-full relative">
        <div className="w-full  md:mr-0 md:block col-span-1 z-0">
          <FilterProducts />
        </div>

        <div className="col-span-3 relative w-full">
          <div className="px-4 bg-white py-[10px] flex md:px-5 justify-start items-center shadow-md">
            <p className="mb-0  text-xl font-bold">
              <FaHome className="text-secondary" />
            </p>
            <p>
              {path.map((linkName) => {
                return (
                  <span>
                    <span className="mx-2"> {"/"} </span>{" "}
                    <span className="capitalize underline">{linkName}</span>
                  </span>
                );
              })}
            </p>
          </div>
          {allProducts.map((category, idx) => {
            return <MaleProducts category={category} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
