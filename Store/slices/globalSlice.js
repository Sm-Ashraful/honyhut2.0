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
    toggleMobileCategory: (state) => {
      state.isMobileDropDownOpen = !state.isMobileDropDownOpen;
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
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
