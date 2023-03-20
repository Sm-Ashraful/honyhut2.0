import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./category-nav.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartOpen,
} from "../../Store/cart/cart.selector";

const tableHeader = [" ", " ", " ", " ", " "];

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
    <div className="relative grid grid-cols-1">
      <div className={`md:col-span-2 mx-4 md:grid-cols-1`}>
        <table className={`${styles.table} w-full`}>
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
                <td className="py-5 px-2 text-center">{item.name.split(" ")[0]}</td>
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
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
