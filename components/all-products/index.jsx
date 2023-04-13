import { useEffect, useState } from "react";
import { IoFilter, IoArrowDown } from "react-icons/io5";

import { filterToggle } from "../../Store/slices/globalSlice";
import { shortPosition } from "../../Store/slices/globalSlice";

import { useDispatch } from "react-redux";
import FilterPage from "../sidebarFilter/filter";
import FeaturedPage from "../sidebarFilter/featured";

import { allProducts } from "@/utils/all-product";

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
        <div className="shadow-md bg-white w-full text-black  py-[13px] mb-2 flex justify-between px-5">
          <p
            onClick={handleFilterOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <span>
              <IoFilter />
            </span>
            <span> Filter</span>
            <div className="md:hidden">
              <FilterPage />
            </div>
          </p>

          <p
            onClick={handleShortOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <span>Short By</span>
            <span>
              <IoArrowDown />
            </span>
            <div className="md:hidden">
              <FeaturedPage />
            </div>
          </p>
        </div>
        <div className="hidden md:flex md:flex-col">
          {/** filter section */}
          <div>
            <form onSubmit={handleSubmit} className="relative">
              {/* Filter section  */}
              <div className="flex flex-col">
                {/* filter items  */}
                <div className="flex flex-col ">
                  <span className="font-bold mb-2 text-secondary">
                    Select Your items
                  </span>
                  <label className="inline-flex items-center ml-2 text-lg">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-black"
                      name="filterOption1"
                      checked={checkedItems.filterOption1}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-black">All</span>
                  </label>
                  <label className="inline-flex items-center ml-2 text-lg">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-black"
                      name="filterOption2"
                      checked={checkedItems.filterOption2}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-black">Men</span>
                  </label>
                  <label className="inline-flex items-center ml-2 text-lg">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-black"
                      name="filterOption3"
                      checked={checkedItems.filterOption3}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-black">Women</span>
                  </label>
                </div>

                {/* categories */}
                <div className="flex flex-col pt-4">
                  <p className="font-bold mb-2 text-secondary">
                    Select By Category
                  </p>
                  <div className="text-lg">
                    {allProducts.map((category, index) => {
                      return (
                        <div>
                          <label
                            className="inline-flex items-center ml-2"
                            key={index}
                          >
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-black"
                              name={category.title}
                              value={category.title} // Set the value attribute
                              onChange={handleChange} // Add the onChange handler
                              checked={selectedCategory === category.title}
                            />
                            <span className="ml-2 text-black">
                              {category.title}
                            </span>
                          </label>
                          <div className="ml-10">
                            {category.title === selectedCategory &&
                              category.subCategory.map((subCategory, index) => {
                                return (
                                  <div>
                                    <label
                                      className="inline-flex items-center ml-2"
                                      key={index}
                                    >
                                      <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 "
                                        name={category.title}
                                        value={category.title} // Set the value attribute
                                        // Add the onChange handler
                                      />
                                      <span className="ml-2 ">
                                        {subCategory.title}
                                      </span>
                                    </label>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* price range  */}
                <div className="pt-10">
                  <span className=" font-bold mb-2 text-secondary">
                    Select By Price Range
                  </span>
                  <input
                    type="range"
                    min="20"
                    max="150"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="slider appearance w-full h-3 rounded-full bg-gray active:bg-secondary"
                  />
                  <span className="-700 font-bold text-sm mt-2">
                    {sliderValue}$
                  </span>
                </div>

                {/* Button  */}
                <button
                  type="submit"
                  className=" mt-10 bg-secondary hover:bg-honey text-white hover:text-black font-2xl py-2 px-20 rounded border border-gray"
                >
                  Filter
                </button>
              </div>
            </form>
          </div>
          {/**Short by section */}
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex border border-l-0 border-r-0 border-t-0">
                <span className="font-semibold text-2xl">SORT BY:</span>
              </div>

              {/* Filter section  */}
              <div className="flex flex-col mb-10 p-4 text-black text-lg">
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2  hover:text-honey">Featured</span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 "
                    name="filterOption"
                  />
                  <span className="ml-2  hover:text-honey">Best Selling</span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 "
                    name="filterOption"
                  />
                  <span className="ml-2  hover:text-honey">
                    Alphabetically, A - Z
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 "
                    name="filterOption"
                  />
                  <span className="ml-2  hover:text-honey">
                    Alphabetically, Z - A
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 "
                    name="filterOption"
                  />
                  <span className="ml-2  hover:text-honey">
                    Price, low to high
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 "
                    name="filterOption"
                  />
                  <span className="ml-2  hover:text-honey">
                    Price, high to low
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
