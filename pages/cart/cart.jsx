import { useState } from "react";
import Head from "next/head";
import styles from "./Cart.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const tableHeader = [" ", " ", "Name", "Price", "Quantity", "Sub Total"];
const tableData = [
  {
    id: 1,
    close: "",
    image: "/images/banner/banner-1.jpg",
    product: "Product 1",
    price: 10,
    quantity: 2,
    total: 20,
  },
  {
    id: 2,
    close: "",
    image: "/images/banner/banner-2.jpg",
    product: "Product 2",
    price: 15,
    quantity: 1,
    total: 15,
  },
  {
    id: 3,
    close: "",
    image: "/images/banner/banner-3.jpg",
    product: "Product 3",
    price: 20,
    quantity: 3,
    total: 60,
  },
  {
    id: 3,
    close: "",
    image: "/images/banner/banner-4.jpg",
    product: "Product 4",
    price: 20,
    quantity: 3,
    total: 60,
  },
];

const calculateTotalCost = () => {
  let totalCost = 0;
  tableData.forEach((item) => {
    totalCost += item.total;
  });
  return totalCost;
};

export default function Cart() {
  const [data, setData] = useState(tableData);

  return (
    <div className="relative grid grid-cols-1 top-28 md:top-48 w-full px-4 md:grid-cols-3">
      <div className={`md:col-span-2 mx-4 pt-10 md:grid-cols-1`}>
        <h2 className="text-center font-bold text-secondary mb-0">Shopping Cart</h2>

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
                  <span className="mx-4 font-bold cursor-pointer hover:text-primary-red">
                    <MdClose />
                  </span>
                  {item.close}
                </td>
                <td className="p-2 h-16 w-24 shadow-sm">
                  <img className="w-full h-full bg-center" src={item.image} />
                </td>
                <td className="py-5 px-2 text-center">{item.product}</td>
                <td className="py-5 px-2 text-center">
                  ${item.price.toFixed(2)}
                </td>
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
                  ${item.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" md:col-span-1 md:py-10 py-0 border-gray md:border-l-2 ">
        <h2 className="text-center font-bold text-secondary mb-0">Cart Totals</h2>

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
          <p className="text-end text-secondary mx-4">
            ${calculateTotalCost().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
