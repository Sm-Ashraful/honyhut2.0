import Image from "next/image";

const Products = ({ categories }) => {
  return (
    <div>
      <div className="bg-white w-full h-auto relative top-4">
        <div className="border-b-2 bg-white text-secondary flex justify-center items-center py-[10px]">
          <h3 className="uppercase text-center mb-0">Filtered By</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {categories.map((category, idx) => {})}
        </div>
      </div>
    </div>
  );
};

export default Products;
