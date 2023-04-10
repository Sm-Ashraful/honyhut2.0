import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.css";

const FeaturedPage = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const isShortByOpen = useSelector((state) => state.sidebar.isShortByOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("short by clicked: ", isShortByOpen);
  }, [isShortByOpen]);

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle Featured submission here
  };

  const close = () => {
    dispatch(setIsOpen(!isOpen));
  };

  return (
    <div
      className={` ${
        isShortByOpen
          ? `${styles.shortBy_container} ${styles.shortBy_container_show}`
          : `${styles.shortBy_container}`
      } px-3 pt-5`}
    >
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
            <span className="ml-2 text-gray hover:text-honey">Featured</span>
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
  );
};

export default FeaturedPage;
