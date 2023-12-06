import { useState } from "react";

import HeroTop from "../../components/common/top-component";
import FilterProducts from "../../components/all-products";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

// filter drawer
import { styled, useTheme } from "@mui/material/styles";
import FilterDrawer from "@/components/Update/FilterDrawer";
import { IoFilter } from "react-icons/io5";
import { setViewProperty } from "@/Store/slices/globalSlice";
import { HiViewGrid } from "react-icons/hi";
import { MdViewStream } from "react-icons/md";
import CustomizedBreadcrumbs from "../../components/Update/BreadCrumbs";
import axiosInstance from "@/utils/helper/axios";
import ListView from "@/components/list-view";
import CommonCard from "@/components/CommonCard";
import Link from "next/link";

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

// get data using static props
export async function getStaticProps() {
  const res = await axiosInstance.get("/product/get-products");

  const products = await res.data.products;

  return {
    props: {
      products,
    },
  };
}

const AllProducts = ({ products }) => {
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
      <div className="relative padding_inside">
        <CustomizedBreadcrumbs />
      </div>
      <FilterDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <div className=" w-full gap-[10px] h-full">
        <div open={open}>
          <div className="!py-[10px] md:!py-5 w-full text-black  flex justify-between padding_inside bg-primary">
            <button
              onClick={handleDrawerOpen}
              aria-label="open drawer"
              className="mb-0 text-trueGray-400 text-sm flex justify-center items-center cursor-pointer gap-[5px] px-8 py-1 border border-trueGray-400 hover:border-ash"
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
          </div>

          <div className="relative w-full  padding_inside">
            <div className="pt-3 md:pt-5">
              {viewProperty === "list" ? (
                <div className="max-w-full grid  gap-[15px] md:gap-[10px] ">
                  {products.map((product, idx) => {
                    return (
                      <Link
                        href={`/product/${product._id}`}
                        key={idx}
                        className=" md:mt-5 mt-2"
                      >
                        <ListView key={idx} product={product} />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="max-w-full grid grid-cols-2 md:grid-cols-4  gap-[5px] md:gap-[10px]">
                  {products.map((product, idx) => {
                    return (
                      <Link
                        href={`/product/${product._id}`}
                        key={idx}
                        className=" md:mt-5 mt-2"
                      >
                        <CommonCard key={idx} product={product} />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
