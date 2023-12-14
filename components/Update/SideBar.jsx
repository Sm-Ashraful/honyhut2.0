import { useState } from "react";
import { Button, Box, SwipeableDrawer } from "@mui/material";
import { FaTimes } from "react-icons/fa";

import Menu from "./Menu";
import MenuCategory from "./MenuCategory";
import { CgMenuLeft } from "react-icons/cg";

export default function SideBar() {
  const [selectedMenu, setSelectedMenu] = useState("menu");
  const [state, setState] = useState({
    left: false,
  });
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

  function handleMenuSection(menu) {
    setSelectedMenu(menu);
  }

  return (
    <div>
      <Button
        className="flex gap-1 items-center cursor-pointer !min-w-[auto]"
        onClick={toggleDrawer("left", true)}
      >
        <p className="text-customTheme text-2xl font-bold">
          <CgMenuLeft />
        </p>
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
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
          <div className="mt-[20px] px-3 w-full mx-auto  flex flex-col items-center cursor-pointer">
            <div className="w-full h-full text-[1.3rem] text-black font-bold flex justify-between items-center">
              <span className="flex-1 flex items-center h-full">
                <span
                  onClick={() => handleMenuSection("menu")}
                  className={`basis-1/2 border-r text-center   h-full px-5 py-2  ${
                    selectedMenu === "menu" ? `isActive` : `blur-[1px]`
                  }`}
                >
                  Menu
                </span>
                <span
                  onClick={() => handleMenuSection("category")}
                  className={`basis-1/2 border-r text-center h-full px-5 py-2  ${
                    selectedMenu === "category" ? `isActive` : `blur-[1px]`
                  }`}
                >
                  Categories
                </span>
              </span>
              <p
                className="h-12 w-12 flex items-center justify-center cursor-pointer hover:text-primary-red text-2xl  text-customTheme"
                onClick={toggleDrawer("left", false)}
              >
                <span className="ml-2">
                  <FaTimes />
                </span>
              </p>
            </div>
          </div>
        </Box>
        <Box className="h-full w-full flex flex-col items-center gap-5">
          <div
            className={`relative w-full h-full  z-0 overflow-x-hidden overflow-y-auto `}
            myContainer
          >
            <div>{selectedMenu === "menu" ? <Menu /> : <MenuCategory />}</div>
          </div>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
