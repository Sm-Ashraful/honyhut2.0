import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartCount,
} from "../../Store/cart/cart.selector";
import {
  removeItem,
  decreaseCartItem,
  addItemToCart,
} from "../../Store/cart/cart.action";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);

  const cartCount = useSelector(selectCartCount);
  const [data, setData] = useState(cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(cartItems, item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseCartItem(cartItems, item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItemToCart(cartItems, item));
  };

  return (
    <div className="relative w-full">
      <div className={` w-full px-5 py-5`}>
        {cartItems.map((cartItem) => (
          <div className="h-[64px] w-full flex mb-[40px] justify-between items-center relative shadow-sm text-black">
            <div className="flex h-full items-center">
              <div className="h-full w-[64px] relative p-3 border bg-white border-fullAsh rounded-md overflow-hidden mr-5">
                <Image
                  src={cartItem.productPictures[0].url}
                  alt={cartItem.name}
                  fill
                  cover
                />
              </div>
              <div>
                <p className="font-semibold max-w-[100px]">
                  {cartItem.name.length > 25
                    ? cartItem.name.slice(0, 17)
                    : cartItem.name}
                  ...
                </p>
                <div className="flex justify-center items-center border border-gray rounded-full px-4 py-2 w-32">
                  {cartItem.quantity}
                  <span
                    className="mr-2 ml-8 font-bold cursor-pointer hover:text-secondary bg-gray rounded-lg"
                    onClick={() => handleDecreaseQuantity(cartItem)}
                  >
                    <AiOutlineMinus />
                  </span>
                  <span
                    className="ml-2 font-bold cursor-pointer hover:text-secondary bg-gray rounded-full"
                    onClick={() => handleIncreaseQuantity(cartItem)}
                  >
                    <AiOutlinePlus />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span
                className="mr-3 font-bold cursor-pointer text-primary-red"
                onClick={() => handleRemoveFromCart(cartItem)}
              >
                Remove
              </span>
            </div>
            <div className="">
              <strong className="">
                {typeof cartItem.offer === "number" ? (
                  <>
                    {cartItem.offer && (
                      <span>
                        {(
                          (cartItem.price -
                            (cartItem.price * cartItem.offer) / 100) *
                          cartItem.quantity
                        ).toFixed(2)}
                        $
                      </span>
                    )}
                  </>
                ) : (
                  <span>{cartItem.price.toFixed(2)} $</span>
                )}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
