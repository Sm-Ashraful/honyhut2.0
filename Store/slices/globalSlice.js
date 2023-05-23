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
  isSearchModalOpen: true,
  isViewProperty: "grid",
  searchValue: null,
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
      state.isHeaderSticky = action.payload;
    },
    setIsSearchModalOpen: (state, action) => {
      state.isSearchModalOpen = action.payload;
    },
    setViewProperty: (state, action) => {
      state.isViewProperty = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
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
  setIsSearchModalOpen,
  setViewProperty,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
