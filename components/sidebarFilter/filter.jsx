import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { FaTimes } from "react-icons/fa";

import styles from "./style.module.css";
import { filterToggle } from "../../Store/slices/globalSlice";

import { allProducts } from "../../utils/all-product";

const FilterPage = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState({});
  const dispatch = useDispatch();
  const ref = useRef(null);
  const router = useRouter();

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(filterToggle(false));
      }
    }

    function handleRouteChange() {
      dispatch(filterToggle(false));
    }

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      router.events.on("routeChangeComplete", handleRouteChange);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isFilterOpen]);

  return (
    <div
      ref={ref}
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
            <h4 className="text-left font-bold text-honey">
              Filter items
              <hr class="w-[60px] my-[5px] border-2  border-honey" />
            </h4>
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

          {/* price range  */}
          <div className="pt-10 text-primary-red">
            <p className="text-black font-bold text-[14px] mb-2 text-left">
              Select By Price Range
            </p>
            <input
              type="range"
              min="20"
              max="150"
              value={sliderValue}
              onChange={handleSliderChange}
              className="slider appearance w-full h-3 rounded-full bg-gray active:bg-primary-red"
            />
            <span className="-700 font-bold text-sm mt-2">{sliderValue}$</span>
          </div>

          {/* Button  */}
          <button
            type="submit"
            className=" mt-10 bg-secondaryTextColor hover:bg-honey text-black hover:text-black font-2xl py-2 px-20 rounded border border-gray"
          >
            Filter Now
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
