import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Cart.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  selectCartItems,
  selectCartOpen,
  selectCartTotal,
  selectCartCount,
} from "../../Store/cart/cart.selector";
import {
  removeItem,
  decreaseCartItem,
  addItemToCart,
} from "../../Store/cart/cart.action";
import { FaHome } from "react-icons/fa";
import RecommandForYou from "../../components/RecommandForYou";
import people from "../../utils/fav-demo-data";
import Button from "../../components/Button";

const tableHeader = [" ", " ", "Name", "Price", "Quantity", "Sub Total"];

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const [data, setData] = useState(cartItems);
  const isCartOpen = useSelector(selectCartOpen);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const quantity = useSelector(selectCartCount);
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
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseCartItem(cartItems, item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItemToCart(cartItems, item));
  };
  const totalWithShippingCost = cartTotal + parseFloat(shippingMethod);

  return (
    <div className="relative top-36 md:top-48 ">
      <div>
        <div className="px-4 bg-white py-[10px] flex md:px-5 justify-start items-center shadow-md">
          <p className="mb-0  text-xl font-bold">
            <FaHome className="text-secondary" />
          </p>
          <p>
            {path.map((linkName) => {
              return (
                <span>
                  <span className="mx-2"> {"/"} </span>{" "}
                  <span className="capitalize underline">{linkName}</span>
                </span>
              );
            })}
          </p>
        </div>
        <h2 className="text-center font-bold text-secondary mb-2">
          Your Shopping Cart
        </h2>
        <div className="flex justify-between px-5 font-semibold">
          <p>Total Items: {cartItems.length}</p>
          <p>Total Quantity: {quantity}</p>
        </div>
        <hr className="border border-secondary" />
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
                      <th
                        className="p-2 text-center text-secondary"
                        key={header}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm md:text-lg">
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className="border border-l-0 border-r-0 border-gray "
                    >
                      <td className="py-5 px-2 text-center  text-gray">
                        <div>
                          <span
                            className="mx-4 font-bold cursor-pointer hover:text-primary-red flex justify-center items-center"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            <MdClose />
                          </span>
                        </div>
                      </td>
                      <td className="p-2 h-16 w-24 shadow-sm">
                        <img
                          className="w-full h-full bg-center"
                          src={item.image}
                          alt={"Image"}
                        />
                      </td>
                      <td className="py-5 px-2 text-center flex justify-center items-center">
                        {item.name}
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
                      <td className="py-5 px-2 text-center ">
                        <div className="flex justify-center items-center">
                          <p
                            className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray"
                            onClick={() => handleDecreaseQuantity(item)}
                          >
                            <AiOutlineMinus />
                          </p>
                          <p>{item.quantity}</p>
                          <p
                            className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray"
                            onClick={() => handleIncreaseQuantity(item)}
                          >
                            <AiOutlinePlus />
                          </p>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-center pr-0">
                        {item.quantity *
                          (typeof item.offer === "number"
                            ? item.price - (item.price * item.offer) / 100
                            : item.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="text-primary-red text-xl">
                  <tr>
                    <th colSpan={4} className="text-sm text-start">
                      *With Discount price
                    </th>

                    <th>Sub Total</th>
                    <th>${cartTotal.toFixed(2)}</th>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className=" md:col-span-1  border-gray md:border-l-2 ">
              <h2 className="text-center font-bold text-secondary md:my-0 mb-0">
                Cart Totals
              </h2>

              <div className="flex flex-col p-4">
                <h1 className="font-bold">Shipping Cost</h1>
                <hr className="h-px mb-2  bg-gray border-0 dark:bg-gray" />
                <label className=" items-center text-lg">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-radio h-5 w-5"
                    value="0"
                    onChange={handleShippingChange}
                    checked={shippingMethod === "0"}
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
                    value="9.99"
                    onChange={handleShippingChange}
                    checked={shippingMethod === "9.99"}
                  />
                  <span className="ml-2 text-gray">
                    Expedited Shipping (4 Business Days):{" "}
                    <span className="text-black">$9.99</span>
                  </span>
                </label>
                <label className=" items-center text-lg">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-radio h-5 w-5"
                    value="17.99"
                    onChange={handleShippingChange}
                    checked={shippingMethod === "17.99"}
                  />
                  <span className="ml-2 text-gray">
                    Express Shipping (2 to 3 Business Days):{" "}
                    <span className="text-black">$17.99</span>
                  </span>
                </label>
                <hr className="h-px  bg-gray border-0 dark:bg-gray" />
              </div>
              <div className="font-bold w-full text-primary-red">
                <p className="text-end mr-10 font-bold text-xl">
                  Total: ${totalWithShippingCost.toFixed(2)}
                </p>
              </div>
              <Link href={"../../cart/checkout"}>
                <Button
                  type="submit"
                  className="bg-secondary text-primary font-bold rounded-md text-lg  hover:bg-primary-red mt-4 w-full"
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="my-5">
        <RecommandForYou
          top={"0"}
          className={false}
          products={people}
          title={`Your Visited Product`}
        />
      </div>
    </div>
  );
}
