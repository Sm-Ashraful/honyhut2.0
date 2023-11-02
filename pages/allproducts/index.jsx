import HeroTop from "../../components/common/top-component";
import FilterProducts from "../../components/all-products";
import MaleProducts from "../../components/all-products/maleProduct";
import { useRouter } from "next/router";

import { allProducts } from "../../utils/all-product";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");
  const viewProperty = useSelector((state) => state.sidebar.isViewProperty);
  return (
    <div className="relative w-full">
      <HeroTop title={"All Products"} />

      <div className=" w-full gap-[10px] h-full  padding_inside">
        <div className="w-full">
          <FilterProducts />
        </div>

        <div className="relative w-full">
          {allProducts.map((category, idx) => {
            return (
              <MaleProducts
                category={category}
                viewProperty={viewProperty}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
