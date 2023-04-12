import React, { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isFilterOpen: false,
  isShortOpen: false,
  isMobileDropDownOpen: false,
  isModalOpen: false,
  isDepartmentOpen: false,
  isDropdownVisible: false,
  isHeroContentInView: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    filterToggle: (state) => {
      console.log("Fileter toggole reducer called: ", state.isFilterOpen);
      state.isFilterOpen = !state.isFilterOpen;
    },
    shortPosition: (state) => {
      state.isShortOpen = !state.isShortOpen;
    },
    toggleMobileCategory: (state) => {
      state.isMobileDropDownOpen = !state.isMobileDropDownOpen;
    },
    favToggle: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    allDepartmentToggle: (state) => {
      state.isDepartmentOpen = !state.isDepartmentOpen;
    },
    setIsDropdownVisible: (state, action) => {
      state.isDropdownVisible = action.payload;
    },
    setHeroContentInView: (state, action) => {
      state.isHeroContentInView = action.payload;
    },
  },
});
export const {
  toggle,
  filterToggle,
  shortPosition,
  toggleMobileCategory,
  favToggle,
  cartToggle,
  allDepartmentToggle,
  setIsDropdownVisible,
  setHeroContentInView,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
