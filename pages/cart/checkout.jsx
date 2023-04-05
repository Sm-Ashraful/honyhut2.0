import { useState } from "react";

import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";

import CheckOut from "../../components/cart/cart";

export default function Checkout() {
  const [selected, setSelected] = useState("");
  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <main className="bg-primary h-auto relative top-36 md:top-52">
        <div className="px-4 bg-white py-[10px] flex md:px-5 justify-start items-center shadow-md">
          <p className="mb-0  text-xl font-bold">
            <FaHome className="text-secondary" />
          </p>
          <p className="md:text-lg">
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
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center my-6 mx-5 max-w-[580px] rounded-md ">
            <label className="flex flex-col items-center text-lg relative h-4 bg-secondary rounded-md ">
              <input
                className="h-4 bg-secondary"
                type="radio"
                value="option1"
                checked={selected === "option1"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray">Shopping Cart</span>
            </label>
            <label className="flex flex-col items-center text-lg relative h-4 bg-secondary">
              <input
                className="h-4 bg-secondary"
                type="radio"
                value="option2"
                checked={selected === "option2"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray">Checkout</span>
            </label>
            <label className="flex flex-col items-center text-lg relative h-4 bg-secondary ">
              <input
                className="h-4 bg-secondary"
                type="radio"
                value="option3"
                checked={selected === "option3"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray">Shipping Address</span>
            </label>
            <label className="flex flex-col items-center text-lg relative h-4 bg-secondary  ">
              <input
                className="h-4 bg-secondary"
                type="radio"
                value="option4"
                checked={selected === "option4"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray">Payment</span>
            </label>
            <label className="flex flex-col items-center text-lg relative h-4 bg-secondary rounded-md ">
              <input
                className="h-4 bg-secondary"
                type="radio"
                value="option5"
                checked={selected === "option5"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray">Place Order</span>
            </label>
          </div>
        </div>
        <div className="mx-8">
          <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="w-full">
              <form className="space-y-2">
                <div className="">
                  <div>
                    <h1
                      htmlFor="name"
                      className="block font-bold text-secondary mb-2"
                    >
                      Billing Address
                    </h1>
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <label htmlFor="name" className="block font-bold mb-2">
                    Country / Region
                  </label>
                  <label htmlFor="name" className="block mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="House number and street name"
                    required
                    className="border border-gray rounded-md p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="town / city name"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="state name"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ZIP code"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    placeholder="Phone number with country code"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email address"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block mb-2">
                    Order notes (optional)
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Notes about your order, e.g. special notes for your delivery"
                    className="border border-gray rounded-md p-2 w-full"
                    rows="5"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="w-full">
              <div className="relative h-auto w-full mb-16 mt-6 bg-white p-4 rounded-md">
                <CheckOut />
              </div>

              <div className="bg-white p-4 rounded-md">
                <div>
                  <label htmlFor="payment-method" className="block mb-2">
                    Payment Method
                  </label>
                  <select
                    id="payment-method"
                    name="payment-method"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  >
                    <option value="credit-card">Master Card</option>
                    <option value="credit-card">VISA Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bitcoin">Bitcoin</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="number" className="block mb-2">
                    Card Number
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    placeholder="put your card number"
                    required
                    className="border border-gray rounded-md p-2 w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div>
                    <label htmlFor="number" className="block mb-2">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="MM/YY"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="block mb-2">
                      Card code
                    </label>
                    <input
                      type="number"
                      id="name"
                      name="name"
                      placeholder="CVC"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="relative right-0">
                <button
                  type="submit"
                  className="bg-honey text-black font-bold rounded-md py-2 px-4 w-full hover:bg-gray transition-colors border border-white mt-4"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
