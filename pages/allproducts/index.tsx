import FilterProducts from "../../components/all-products";
import MaleProducts from "../../components/all-products/maleProduct";

import { allProducts } from "../../utils/all-product";

const AllProducts = () => {
  return (
    <div className="relative top-36 md:top-52 md:px-4">
      <div className="md:grid md:grid-cols-4 w-full md:gap-[10px] h-full relative">
        <div className="md:fixed w-full  md:mr-0 md:block grid-cols-width">
          <FilterProducts />
        </div>
        <div className="col-span-3 relative w-full grid-cols-left ">
          {allProducts.map((category, idx) => {
            return <MaleProducts category={category} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
