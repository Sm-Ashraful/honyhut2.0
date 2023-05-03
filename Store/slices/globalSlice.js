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
  isHeaderSticky: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    filterToggle: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    shortPosition: (state) => {
      state.isShortOpen = !state.isShortOpen;
    },
    toggleMobileCategory: (state, action) => {
      state.isMobileDropDownOpen = action.payload;
    },
    favToggle: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    allDepartmentToggle: (state) => {
      state.isDepartmentOpen = !state.isDepartmentOpen;
    },
    setIsDropdownVisible: (state) => {
      state.isDropdownVisible = !state.isDropdownVisible;
    },
    setIsHeaderSticky: (state, action) => {
      console.log("Is slice shit call");
      state.isHeaderSticky = action.payload;
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
  setIsHeaderSticky,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
