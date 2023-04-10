import { useEffect, useState } from "react";
import Image from "next/image";
import { IoFilter, IoArrowDown } from "react-icons/io5";
import Filter from "../sidebarFilter/filter";
import SortBy from "../sidebarFilter/featured";

import { filterToggle, shortByToggle } from "../../Store/slices/globalSlice";

import { useDispatch } from "react-redux";

const options = [
  { value: "all", label: "All" },
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

const FilterProducts = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("all");

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  useEffect(() => {}, []);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  const handleShortOnClick = (event) => {
    event.preventDefault();

    dispatch(shortByToggle());
  };
  const handleFilterOnClick = (event) => {
    event.preventDefault();

    dispatch(filterToggle());
  };

  return (
    <div>
      <div className="w-full h-auto relative">
        <div className="md:border-b-2 bg-white w-full text-black  py-[10px] mb-2 flex justify-between px-5">
          <p
            onClick={handleFilterOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <span>
              <IoFilter />
            </span>
            <span> Filter</span>
          </p>

          <p
            onClick={handleShortOnClick}
            className="mb-0  text-xl font-medium flex justify-center items-center gap-[5px]"
          >
            <span>Short By</span>
            <span>
              <IoArrowDown />
            </span>
          </p>
        </div>
        <div className="hidden md:flex md:flex-col">
          {/** filter section */}
          <div>
            <form onSubmit={handleSubmit} className="relative">
              {/* Filter section  */}
              <div className="flex flex-col">
                {/* filter items  */}
                <div className="flex flex-col">
                  <span className="font-bold mb-2">Select Your items</span>
                  <label className="inline-flex items-center ml-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray"
                      name="filterOption1"
                      checked={checkedItems.filterOption1}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-gray">All</span>
                  </label>
                  <label className="inline-flex items-center ml-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray"
                      name="filterOption2"
                      checked={checkedItems.filterOption2}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-gray">Men</span>
                  </label>
                  <label className="inline-flex items-center ml-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray"
                      name="filterOption3"
                      checked={checkedItems.filterOption3}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-gray">Women</span>
                  </label>
                </div>

                {/* categories */}
                <div className="flex flex-col pt-4">
                  <p className="font-bold mb-2">Select By Category</p>

                  <select
                    className="rounded-lg border border-honey py-2 px-4 outline-honey"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* price range  */}
                <div className="pt-10">
                  <span className="text-gray font-bold mb-2">Price</span>
                  <input
                    type="range"
                    min="20"
                    max="150"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="slider appearance w-full h-3 rounded-full bg-gray active:bg-secondary"
                  />
                  <span className="text-gray-700 font-bold text-sm mt-2">
                    {sliderValue}
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
              <div className="flex flex-col mb-10 p-4">
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2 text-gray hover:text-honey">
                    Featured
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2 text-gray hover:text-honey">
                    Best Selling
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2 text-gray hover:text-honey">
                    Alphabetically, A - Z
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2 text-gray hover:text-honey">
                    Alphabetically, Z - A
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2 text-gray hover:text-honey">
                    Price, low to high
                  </span>
                </label>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray"
                    name="filterOption"
                  />
                  <span className="ml-2 text-gray hover:text-honey">
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
