import { useState } from "react";
import { IoFilter } from "react-icons/io5";

import { filterToggle, setViewProperty } from "../../Store/slices/globalSlice";

import { useDispatch, useSelector } from "react-redux";
import FilterPage from "../sidebarFilter/filter";

import { HiViewGrid } from "react-icons/hi";
import { MdViewStream } from "react-icons/md";

const FilterProducts = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState({});

  const viewProperty = useSelector((state) => state.sidebar.isViewProperty);
  console.log("State view property: ", viewProperty);

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

  const handleFilterOnClick = (event) => {
    event.preventDefault();
    dispatch(filterToggle());
  };
  function handleChange(event) {
    // Get the checked value
    setSelectedCategory(event.target.value);
  }

  console.log("View property: ", viewProperty);

  return (
    <div className="mt-[1.5rem]">
      <div className="w-full h-auto">
        <div className=" px-4  py-[10px] w-full text-black mb-2 flex justify-between">
          <button
            onClick={handleFilterOnClick}
            className="mb-0 text-sm flex justify-center items-center cursor-pointer gap-[5px] px-8 py-2 border border-primary hover:border-ash"
          >
            <IoFilter />

            <span> Filter</span>
          </button>
          <FilterPage />
          <div className="flex justify-center items-center  text-2xl md:text-4xl">
            <span
              className={`border mx-[5px] md:mx-[13px] cursor-pointer ${
                viewProperty === "grid" ? "text-black" : "text-warmGray-400"
              }`}
              onClick={() => dispatch(setViewProperty("grid"))}
            >
              <HiViewGrid className="" />
            </span>
            <span
              className={`border cursor-pointer ${
                viewProperty === "list" ? "text-black" : "text-warmGray-400"
              }`}
              onClick={() => dispatch(setViewProperty("list"))}
            >
              <MdViewStream />
            </span>
          </div>
          <div class="flex justify-center items-center border">
            <select className="text-sm pl-5 py-2 flex justify-center items-center  focus:outline-none">
              <option>Featured</option>
              <option>Best Selling</option>
              <option>Alphabetically, A - Z</option>
              <option>Alphabetically, Z - A</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
