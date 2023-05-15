import Link from "next/link";
import CategoryCard from "../Card/categoryCard";
import CategoryData from "@/utils/category-demo-data";

const AboutProduct = () => {
  return (
    <div className="my-[3rem] padding_inside">
      <h2 className="text-honey md:text-center text-center drop-shadow-md">
        Our Products
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>
      <div className="pt-[2rem] flex">
        {CategoryData.map((item, personIndex) => {
          return (
            <Link key={personIndex} href={`/product-categories/${item.name}`}>
              <CategoryCard
                name={item.name}
                image={item.image}
                totalItem={item.totalItem}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AboutProduct;
