import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const options = [
  { value: "all", label: "All" },
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

const FilterPage = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [sliderValue, setSliderValue] = useState(0);

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
    // handle filter submission here
  };


  const dispatch = useDispatch();
  const close = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const [selectedOption, setSelectedOption] = useState("all");

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="p-8">
        <form onSubmit={handleSubmit}>

          {/* <div className="flex top-4 left-4 border border-l-0 border-r-0 border-t-0 pb-8">
            <span className="font-semibold text-2xl absolute top-4 left-6">
              FILTER
            </span>
            <p
              className="absolute top-4 right-6 cursor-pointer hover:text-primary-red text-3xl transform transition-all hover:rotate-180 duration-700"
              onClick={close}
            >
              <AiOutlineClose />
            </p>
          </div> */}

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
                max="1000"
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
  );
};

export default FilterPage;
