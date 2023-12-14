import React from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "@/Store/cart/cart.selector";
import { selectCartItems } from "@/Store/cart/cart.selector";
import CheckOut from "./cart";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

//material ui import
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

const CartNav = ({ view, goto, cartCount }) => {
  const [state, setState] = React.useState({
    right: false,
  });
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment>
        <Button
          className="flex gap-1 items-center cursor-pointer !min-w-[auto]"
          onClick={toggleDrawer("right", true)}
        >
          <div className="relative text-customTheme font-semibold">
            <BsCart4 className="text-[21px] md:text-[26px] " />
            <span className="absolute -top-[10px] left-[8px]">{cartCount}</span>
          </div>
          <p className="hidden md:block text-customTheme capitalize font-semibold">
            Cart
          </p>
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          <Box
            sx={{
              paddingBottom: "10px",
              borderBottom: 1,
              borderColor: "divider",
              position: "relative",
            }}
            className="w-[80vw] md:w-[340px]"
          >
            <div className="mt-[20px] w-fit mx-auto  flex flex-col items-center cursor-pointer">
              <div className="w-fit relative flex flex-col items-center">
                <BsCart4 className="text-[26px]" />
                <p>Cart Items</p>
                <span className="absolute -top-[10px] left-[35px]">0</span>
              </div>
              <p className="text-[10pt]"> You have free shipping</p>
              <p
                className="h-12 w-12 absolute left-0 flex items-center justify-center cursor-pointer hover:text-primary-red text-2xl  text-customTheme"
                onClick={toggleDrawer("right", false)}
              >
                <span className="ml-2">
                  <FaTimes />
                </span>
              </p>
            </div>
          </Box>
          <Box className="h-full w-full flex flex-col items-center gap-5">
            <div
              className={`relative w-full h-full pt-10 z-0 overflow-x-hidden overflow-y-auto `}
              myContainer
            >
              {cartItems.length > 0 ? (
                <div className="w-full">
                  <div className="relative left-2 h-5/6 w-full text-sm">
                    <CheckOut />
                  </div>
                  <div className="fixed bottom-0 mb-2 flex flex-col w-full">
                    <div className="px-5">
                      <hr className="w-full h-[1px]  bg-gray border-0" />
                      <div className="flex justify-between items-center py-5 text-xl font-bold text-primary-red">
                        <p>SubTotal</p>
                        <p>${cartTotal.toFixed(2)}</p>
                      </div>
                      <hr className="w-full h-[1px]  bg-gray border-0" />
                      <p className="text-sm py-3">
                        <span className="text-primary-red">*</span>No need to
                        pay additional shipping charge
                      </p>
                    </div>
                    <div className="cursor-pointer place-items-center w-full px-4 py-2">
                      <Link href={"../../cart/shopping-cart"}>
                        <div className="text-black bg-secondaryTextColor border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
                          {view}
                        </div>
                      </Link>
                    </div>

                    <div className="cursor-pointer place-items-center w-full px-4">
                      <Link href={"../../checkout/checkout"}>
                        <button class="text-white bg-primary-red border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center w-full">
                          {goto}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="gap-5 w-full h-full text-customTheme">
                  <p className="text-center">Your Cart Is Empty</p>
                  <div className="flex flex-col w-full  items-center pt-5 gap-3">
                    <button className="border-2 hover:bg-customTheme hover:text-white border-customTheme w-3/5 px-5 py-3">
                      Shop Supplements
                    </button>
                    <button className="border-2 hover:bg-customTheme hover:text-white border-customTheme w-3/5 px-5 py-3">
                      Shop Electronics
                    </button>
                    <button className="border-2 hover:bg-customTheme hover:text-white border-customTheme w-3/5 px-5 py-3">
                      Shop Hardware
                    </button>
                    <button className="border-2 hover:bg-customTheme hover:text-white border-customTheme w-3/5 px-5 py-3">
                      Shop Lifestyle
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default CartNav;
