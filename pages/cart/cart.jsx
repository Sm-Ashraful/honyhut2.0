import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Cart.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";


import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartOpen,
} from "../../Store/cart/cart.selector";
import {
  removeItem,
  decreaseCartItem,
  addItemToCart,
} from "../../Store/cart/cart.action";

const tableHeader = [" ", " ", "Name", "Price", "Quantity", "Sub Total"];

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const [data, setData] = useState(cartItems);
  const isCartOpen = useSelector(selectCartOpen);
  const dispatch = useDispatch();
  let totalCost = 0;

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
    <div className="padding_inside relative top-36 md:top-48 ">
      <h2 className="text-center font-bold text-secondary mb-0">
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h3 className="text-gray">Your Cart Is Empty </h3>
        </div>
      ) : (
        <div className="h-auto my-5 grid md:grid-cols-3">
          <div className={`md:col-span-2 mx-4  md:grid-cols-1`}>
            <table className={`${styles.table} pr-4`}>
              <thead>
                <tr>
                  {tableHeader.map((header) => (
                    <th className="p-2 text-center text-secondary" key={header}>
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
                      <img
                        className="w-full h-full bg-center"
                        src={item.image}
                        alt={"Image"}
                      />
                    </td>
                    <td className="py-5 px-2 text-center">{item.name}</td>
                    <td className="py-5 px-2 text-center">{item.price}</td>
                    <td className="py-5 px-2 text-center flex justify-center items-center">
                      <span
                        className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        <AiOutlineMinus />
                      </span>
                      {item.quantity}
                      <span
                        className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        <AiOutlinePlus />
                      </span>
                    </td>
                    <td className="py-5 px-2 text-center pr-0">
                      {item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className=" md:col-span-1  border-gray md:border-l-2 ">
            <h2 className="text-center font-bold text-secondary mb-0">
              Cart Totals
            </h2>

            <div className="flex flex-col p-4">
              <h1 className="font-bold">Shipping</h1>
              <hr className="h-px mb-2  bg-gray border-0 dark:bg-gray" />
              <label className=" items-center text-lg">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio h-5 w-5"
                />
                <span className="ml-2 text-gray">
                  Free Standard Shipping (5-8 Business Days)
                </span>
              </label>
              <label className=" items-center text-lg">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio h-5 w-5"
                />
                <span className="ml-2 text-gray">
                  Expedited Shipping (4 Business Days): $9.99
                </span>
              </label>
              <label className=" items-center text-lg">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio h-5 w-5"
                />
                <span className="ml-2 text-gray">
                  Express Shipping (2 to 3 Business Days): $17.99
                </span>
              </label>
              <hr className="h-px mb-2  bg-gray border-0 dark:bg-gray" />
            </div>
            <div className="font-bold w-full flex justify-between pb-0">
              <p className="text-center ml-10 font-bold">Total:</p>
            </div>
            <Link href={"../../cart/checkout"}>
                <button
                  type="submit"
                  className="bg-honey text-black font-bold rounded-md mx-2 py-2 px-2 w-full hover:bg-gray transition-colors border border-white mt-4"
                >
                  Checkout
                </button>
              </Link>
          </div>
        </div>
      )}
    </div>
  );
}
