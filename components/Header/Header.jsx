import React from "react";
import HeaderTop from "./partials/header-top";
import HeaderMain from "./partials/Header-main";
import logo from "../../Assets/honeyhut logo.png";

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderMain logo={logo} />
    </div>
  );
};

export default Header;
