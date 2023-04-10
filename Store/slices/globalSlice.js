import React, { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isFilterOpen: false,
  isShortByOpen: false,
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
      state.isFilterOpen = !state.isFilterOpen;
    },
    shortByToggle: (state) => {
      state.isShortByOpen = !state.isShortByOpen;
    },
    stickyPosition: (state) => {
      state.isSticky = !state.isSticky;
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
  stickyPosition,
  shortByToggle,
  favToggle,
  cartToggle,
  allDepartmentToggle,
  setIsDropdownVisible,
  setHeroContentInView,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
