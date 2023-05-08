import { useEffect, useState } from "react";
import { IoFilter, IoArrowDown } from "react-icons/io5";

import { filterToggle } from "../../Store/slices/globalSlice";
import { shortPosition } from "../../Store/slices/globalSlice";

import { useDispatch } from "react-redux";
import FilterPage from "../sidebarFilter/filter";
import FeaturedPage from "../sidebarFilter/featured";

// import { allProducts } from "@/utils/all-product";

const FilterProducts = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleShortOnClick = (event) => {
    event.preventDefault();
    dispatch(shortPosition());
  };
  const handleFilterOnClick = (event) => {
    event.preventDefault();
    dispatch(filterToggle());
  };
  function handleChange(event) {
    // Get the checked value
    setSelectedCategory(event.target.value);
  }

  return (
    <div>
      <div className="w-full h-auto relative">
        <div className="w-full text-black  py-[13px] mb-2 flex justify-between px-5">
          <p
            onClick={handleFilterOnClick}
            className="mb-0 text-xl font-medium flex justify-center items-center gap-[5px] border border-gray-300 px-6 py-2 rounded"
          >
            <span>
              <IoFilter />
            </span>
            <span> Filter</span>

            <span className="">
              <FilterPage />
            </span>
          </p>

          <p
            onClick={handleShortOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <span className="">
              <FeaturedPage />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
