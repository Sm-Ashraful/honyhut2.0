import React from "react";
import styles from "../Cart.module.css";

import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";

import Button from "@/components/Button";
const tableHeader = [" ", " ", "Product", "Price", "Quantity", "Sub Total"];

const CartList = (props) => {
  const {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
    data,
  } = props;
  return (
    <div className="h-auto my-5 grid">
      <div className={``}>
        <table className={`${styles.table}`}>
          <thead>
            <tr>
              {tableHeader.map((header) => (
                <th className="p-2 text-end text-black" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm md:text-lg bg-gray-50">
            {data.map((item) => (
              <tr
                key={item.id}
                className="border border-l-0 border-r-0 border-gray "
              >
                <td className="py-5 px-2 mr-3 text-center border-r  text-gray">
                  <div>
                    <span
                      className="mx-4 font-bold cursor-pointer hover:text-primary-red flex justify-center items-center"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <MdClose />
                    </span>
                  </div>
                </td>
                <td className="p-2 h-16 md:h-20 w-20 md:w-28 shadow-sm border-r">
                  <img
                    className="w-full h-full bg-center"
                    src={item.image}
                    alt={"Image"}
                  />
                </td>
                <td className="py-5 px-2 text-end mr-3 border-r">
                  {item.name}
                </td>
                <td className="py-5 px-2 text-end border-r">
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
                <td className="py-5 px-2 flex justify-end items-center ml-2 border-r">
                  <div className="flex flex-col justify-center items-center rounded-full py-2 ">
                    <span
                      className="mx-2 py-2 font-bold cursor-pointer hover:text-primary-red bg-gray rounded-lg"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      <AiOutlineMinus />
                    </span>
                    {item.quantity}
                    <span
                      className="mx-2 py-2 font-bold cursor-pointer hover:text-primary-red bg-gray rounded-full"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                </td>
                <td className="py-5 px-2 text-end">
                  ${" "}
                  {(
                    item.quantity *
                    (typeof item.offer === "number"
                      ? item.price - (item.price * item.offer) / 100
                      : item.price)
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="md:flex justify-between items-center mt-12 font-openSans">
          <div className="w-full basis-1/2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Add Order Note
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <div className="flex flex-col justify-center items-center mt-12 md:mt-0">
            <h2 className="mb-2">Subtotal: {props.cartTotal.toFixed(2)} $</h2>
            <p>All Taxes and shipping included</p>
            <Link href={"../../checkout/checkout"}>
              <Button
                type="submit"
                className="bg-honey text-primary font-bold rounded-md text-lg  hover:bg-primary-red mt-4 w-full flex justify-between items-center"
              >
                <HiShoppingBag />
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
