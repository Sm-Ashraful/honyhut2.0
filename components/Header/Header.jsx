import React from "react";
import HeaderTop from "./partials/header-top";
import HeaderMain from "./partials/Header-main";
import logo from "../../Assets/honeyhut logo.png";
import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../Store/cart/cart.action";
import { selectCartCount } from "../../Store/cart/cart.selector";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setIsCartOpen(true));
  };

  return (
    <div className="">
      <div className="hidden md:block">
        <HeaderTop handleCart={handleCart} />
      </div>
      <HeaderMain logo={logo} handleCart={handleCart} cartCount={cartCount} />
    </div>
  );
};

export default Header;
