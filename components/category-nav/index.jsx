import styles from "./style.module.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileCategory } from "@/Store/slices/globalSlice";

import CategoryItem from "./category";

const CategoryNav = () => {
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();

  function handleClickOutside(event) {
    event.preventDefault();
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggleMobileCategory(false));
    }
  }

  const isMobileDropDownOpen = useSelector(
    (state) => state.sidebar.isMobileDropDownOpen
  );
  return (
    <div
      ref={sidebarRef}
      className={`${styles.dropdownMenu} ${
        isMobileDropDownOpen ? `${styles.open}` : ""
      }`}
    >
      <CategoryItem handleClickOutside={handleClickOutside} />
    </div>
  );
};

export default CategoryNav;
