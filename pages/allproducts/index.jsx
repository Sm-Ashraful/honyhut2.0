import { useState } from "react";

import HeroTop from "../../components/common/top-component";
import FilterProducts from "../../components/all-products";
import MaleProducts from "../../components/all-products/maleProduct";
import { useRouter } from "next/router";

import { allProducts } from "../../utils/all-product";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

// filter drawer
import { styled, useTheme } from "@mui/material/styles";
import FilterDrawer from "@/components/Update/FilterDrawer";
import { IoFilter } from "react-icons/io5";
import { setViewProperty } from "@/Store/slices/globalSlice";
import { HiViewGrid } from "react-icons/hi";
import { MdViewStream } from "react-icons/md";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexShrink: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);
const AppBar = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AllProducts = () => {
  // const theme = useTheme();
  const [open, setOpen] = useState(true);

  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");
  const dispatch = useDispatch();

  const viewProperty = useSelector((state) => state.sidebar.isViewProperty);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /**
   * 
   * <div className="w-full">
          <FilterProducts />
        </div>

   */

  return (
    <div className="relative w-full">
      <HeroTop title={"All Products"} />
      <FilterDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <div className=" w-full gap-[10px] h-full  padding_inside">
        <Main open={open}>
          <div className="py-[10px] w-full text-black mb-2 flex justify-between">
            <button
              onClick={handleDrawerOpen}
              aria-label="open drawer"
              className="mb-0 text-trueGray-400 text-sm flex justify-center items-center cursor-pointer gap-[5px] px-8 py-2 border border-primary hover:border-ash"
            >
              <IoFilter />

              <span> Filter</span>
            </button>

            <div className="flex justify-center items-center  text-2xl md:text-4xl">
              <span
                className={`border mx-[5px] md:mx-[13px] cursor-pointer ${
                  viewProperty === "grid" ? "text-black" : "text-trueGray-400"
                }`}
                onClick={() => dispatch(setViewProperty("grid"))}
              >
                <HiViewGrid className="" />
              </span>
              <span
                className={`border cursor-pointer ${
                  viewProperty === "list" ? "text-black" : "text-trueGray-400"
                }`}
                onClick={() => dispatch(setViewProperty("list"))}
              >
                <MdViewStream />
              </span>
            </div>
            <div class="flex justify-center items-center border text-trueGray-400">
              <select className="text-sm pl-5 py-2 flex justify-center items-center  focus:outline-none">
                <option>Featured</option>
                <option>Best Selling</option>
                <option>Alphabetically, A - Z</option>
                <option>Alphabetically, Z - A</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
            </div>
          </div>

          <div className="relative w-full">
            {allProducts.map((category, idx) => {
              return (
                <MaleProducts
                  category={category}
                  viewProperty={viewProperty}
                  key={idx}
                />
              );
            })}
          </div>
        </Main>
      </div>
    </div>
  );
};
export default AllProducts;
