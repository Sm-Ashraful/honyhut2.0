import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import RouteLink from "@/components/common/route-link";
import HeroTop from "../../components/common/top-component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Store/cart/cart.selector";
import {
  removeItem,
  decreaseCartItem,
  addItemToCart,
} from "../../Store/cart/cart.action";

import RecommandForYou from "../../components/RecommandForYou";
import people from "../../utils/fav-demo-data";
import LineWithCircle from "../../components/common/LineWithCircle";
import CartList from "./partials/CartList";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const [data, setData] = useState(cartItems);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const [shippingMethod, setShippingMethod] = useState("0");

  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");

  useEffect(() => {
    setData(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(cartItems, item));
  };

  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);

    const shippingValue = parseFloat(event.target.value);
    dispatch(addShippingCost(shippingValue));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseCartItem(cartItems, item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItemToCart(cartItems, item));
  };
  const totalWithShippingCost = cartTotal + parseFloat(shippingMethod);

  return (
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem] ">
      <div className="relative">
        <div>
          <HeroTop title={"Shopping Cart"} />
        </div>
        <div className="absolute md:top-0 left-0  -bottom-[45px]">
          <RouteLink path={path} background="transparent" />
        </div>
      </div>
      <div className="mt-10 padding_inside">
        <LineWithCircle />
        {cartItems.length === 0 ? (
          <div className="w-full h-96 flex justify-center items-center">
            <h3 className="text-gray">Your Cart Is Empty </h3>
          </div>
        ) : (
          <>
            <CartList
              data={data}
              cartTotal={cartTotal}
              handleRemoveFromCart={handleRemoveFromCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
            />
          </>
        )}
      </div>
      <div className="mt-20">
        <RecommandForYou
          top={"0"}
          className={false}
          products={people}
          title={`You May Also like`}
        />
      </div>
    </div>
  );
}
