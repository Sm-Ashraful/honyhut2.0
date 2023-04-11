import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import styles from "./style.module.css";
import { filterToggle } from "../../Store/slices/globalSlice";

import { allProducts } from "../../utils/all-product";

const FilterPage = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState({});
  const dispatch = useDispatch();

  const isFilterOpen = useSelector((state) => state.sidebar.isFilterOpen);
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

  function handleFilterClose(event) {
    event.stopPropagation();
    dispatch(filterToggle());
  }
  function handleChange(event) {
    // Get the checked value
    setSelectedCategory(event.target.value);
  }

  return (
    <div
      className={` ${
        isFilterOpen
          ? `${styles.filter_container} ${styles.filter_container_show}`
          : `${styles.filter_container}`
      } px-3 pt-5`}
    >
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
            <p className="font-bold mb-2 text-secondary">Select By Category</p>
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
                      <span className="ml-2 text-black">{category.title}</span>
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
            <span className="text-secondary font-bold mb-2">
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
            <span className="-700 font-bold text-sm mt-2">{sliderValue}$</span>
          </div>

          {/* Button  */}
          <button
            type="submit"
            className=" mt-10 bg-secondaryTextColor hover:bg-honey text-black hover:text-black font-2xl py-2 px-20 rounded border border-gray"
          >
            Filter
          </button>
        </div>
        <div
          className="absolute w-[25px] h-[25px] top-0 right-0 text-primary-red text-2xl"
          onClick={handleFilterClose}
        >
          <FaTimes />
        </div>
      </form>
    </div>
  );
};

export default FilterPage;
