import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./category-nav.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../Store/cart/cart.selector";
import {
  removeItem,
  decreaseCartItem,
  addItemToCart,
} from "../../Store/cart/cart.action";

const tableHeader = [" ", "image", " name", "price", " quantity"];

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <div className={`mx-4 w-full`}>
        {cartItems.length < 1 ? (
          <div className="flex justify-center items-center w-full h-full text-2xl">
            <p className="text-center">Your Cart Is Empty</p>
          </div>
        ) : (
          <table className={`${styles.table} w-full`}>
            <thead>
              <tr>
                {tableHeader.map((header) => (
                  <th
                    className="p-2 text-center text-secondary capitalize"
                    key={header}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border border-l-0 border-r-0 border-gray"
                >
                  <td className="py-5 px-2 text-center flex justify-center items-center text-gray">
                    <span
                      className="mx-4 font-bold cursor-pointer hover:text-primary-red"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <MdClose />
                    </span>
                  </td>
                  <td className="p-2 h-16 w-24 shadow-sm">
                    <img className="w-full h-full bg-center" src={item.image} />
                  </td>
                  <td className="py-5 px-2 text-center">
                    {item.name.split(" ")[0]} {item.name.split(" ")[1]}
                  </td>
                  <td className="py-5 px-2 text-center">
                    {typeof item.offer === "number" ? (
                      <>
                        {item.offer && (
                          <span>
                            $
                            {(
                              item.price -
                              (item.price * item.offer) / 100
                            ).toFixed(2)}
                          </span>
                        )}
                      </>
                    ) : (
                      <span>${item.price.toFixed(2)}</span>
                    )}
                  </td>
                  <td className="py-5 px-2 text-center flex justify-center items-center m-2">
                   <div className="flex justify-center items-center border border-gray rounded-full px-6 py-2 ">
                   {item.quantity}
                    <span
                      className="mr-2 ml-4 font-bold cursor-pointer hover:text-secondary bg-gray rounded-lg"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span
                      className="ml-2 font-bold cursor-pointer hover:text-secondary bg-gray rounded-full"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <AiOutlinePlus />
                    </span>
                   </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-primary-red text-xl">
              <tr>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>${cartTotal.toFixed(2)}</th>

                <th>{cartCount} pcs</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}
