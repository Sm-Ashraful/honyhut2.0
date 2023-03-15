import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Cart.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartOpen,
} from "../../Store/cart/cart.selector";

const tableHeader = [" ", " ", "Name", "Price", "Quantity", "Sub Total"];

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const [data, setData] = useState(cartItems);
  const isCartOpen = useSelector(selectCartOpen);

  const calculateTotalCost = () => {
    let totalCost = 0;
    data.forEach((item) => {
      totalCost += item.price * item.quantity;
    });
    return totalCost;
  };

  return (
    <div className="relative grid grid-cols-4 top-36 md:top-48 w-full px-4">
      <div className={`col-span-3 mx-4 py-10`}>
        <h2 className="text-center font-bold text-secondary">Shopping Cart</h2>

        <table className={`${styles.table}`}>
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
                  <span className="mx-4 font-bold cursor-pointer hover:text-primary-red">
                    <MdClose />
                  </span>
                </td>
                <td className="p-2 h-16 w-24 shadow-sm">
                  <img className="w-full h-full bg-center" src={item.image} />
                </td>
                <td className="py-5 px-2 text-center">{item.name}</td>
                <td className="py-5 px-2 text-center">{item.price}</td>
                <td className="py-5 px-2 text-center flex justify-center items-center">
                  <span className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray">
                    <AiOutlineMinus />
                  </span>
                  {item.quantity}
                  <span className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray">
                    <AiOutlinePlus />
                  </span>
                </td>
                <td className="py-5 px-2 text-center pr-0">
                  {calculateTotalCost()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-span-1 my-10 border-gray border-l-2">
        <h2 className="text-center font-bold text-secondary">Cart Totals</h2>

        <div className="flex flex-col p-4">
          <h1 className="font-bold">Shipping</h1>
          <hr className="h-px mb-5  bg-gray border-0 dark:bg-gray" />
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
          <hr className="h-px mb-5  bg-gray border-0 dark:bg-gray" />
        </div>
        <div className="font-bold w-full flex justify-between">
          <p className="text-center ml-10 font-bold">Total:</p>
        </div>
      </div>
    </div>
  );
}
