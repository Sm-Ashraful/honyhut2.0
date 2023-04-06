import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";

import CheckOut from "../../components/cart/cart";
import Button from "../../components/Button";

export default function Checkout() {
  const [selected, setSelected] = useState("");
  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");
  const defaultFormValue = {
    firstName: "",
    streetAddress: "",
    townCity: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  };

  const [formValues, setFormValues] = useState(defaultFormValue);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isSubmitComplete, setIsSubmitCompleted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      console.log("previous value: ", prevValues);
      return { ...prevValues, [name]: value };
    });
    console.log("value: ", value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(formValues);
    setIsSubmitCompleted(true);
    setFormValues(defaultFormValue);
  };

  useEffect(() => {
    const isComplete =
      formValues.firstName &&
      formValues.streetAddress &&
      formValues.townCity &&
      formValues.state &&
      formValues.zipCode &&
      formValues.phoneNumber;
    setIsFormComplete(isComplete);
  }, [formValues]);

  const handleChange = (event) => {
    event.preventDefault();
    setSelected(event.target.value);
  };

  function handleCheckboxChange(e) {
    e.preventDefault();
    setIsSubmitCompleted(false);
  }

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
            <label className="flex flex-col items-center text-lg relative h-4 bg-secondary rounded-r-md ">
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
        <div className="mb-5">
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="w-full col-span-2">
              <div>
                <div className="my-4 mx-5">
                  <p
                    htmlFor="name"
                    className="block font-bold text-tertiary mb-0 "
                  >
                    Billing Address
                  </p>
                  <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
                </div>
                <form
                  className={`text-sm md:text-lg mx-5 ${
                    isSubmitComplete && "hidden"
                  }`}
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex mb-2">
                    <div className="w-1/2 pr-2">
                      <label htmlFor="name" className="block">
                        First Name
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={
                          submittedValues?.firstName ||
                          formValues.firstName ||
                          ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="name" className="block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={
                          submittedValues?.lastName || formValues.lastName || ""
                        }
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="mr-2">
                      <label htmlFor="name" className="block font-bold">
                        Country / Region
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="townCity"
                        name="townCity"
                        placeholder="United States"
                        value={"United States "}
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block">
                        Street Address
                        <span className="text-primary-red">*</span>
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          placeholder="House number and street name"
                          value={
                            submittedValues?.streetAddress ||
                            formValues.streetAddress ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full mr-2"
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          id="apartment"
                          name="apartment"
                          placeholder="Apartment, suite, unit etc. (optional)"
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-full mr-2">
                      <label htmlFor="name" className="block">
                        Town / City
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="townCity"
                        name="townCity"
                        placeholder="town / city name"
                        value={
                          submittedValues?.townCity || formValues.townCity || ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="w-full mr-2">
                      <label htmlFor="name" className="block">
                        State
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State / Province / Region Name"
                        value={submittedValues?.state || formValues.state || ""}
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="block">
                        ZIP Code
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        placeholder="ZIP code"
                        value={
                          submittedValues?.zipCode || formValues.zipCode || ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex  mb-2">
                    <div className="w-full mr-2">
                      <label htmlFor="number" className="block">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone number"
                        value={
                          submittedValues?.phoneNumber ||
                          formValues.phoneNumber ||
                          ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="block ">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email address"
                        value={submittedValues?.email || formValues.email || ""}
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      disabled={!isFormComplete}
                      type="submit"
                      className={`bg-secondary rounded-lg text-primary px-6 py-3  hover:bg-primary-red ${
                        !isFormComplete &&
                        "opacity-50 text-gray cursor-not-allowed"
                      }`}
                    >
                      Add
                    </button>
                  </div>
                </form>
                <div
                  className={`mx-6 ${isSubmitComplete ? "block" : "hidden"}`}
                >
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    name="myCheckbox"
                    value="true"
                    checked={isSubmitComplete}
                    onChange={handleCheckboxChange}
                  />
                  <label for="myCheckbox" className="pl-2 text-secondary">
                    Billing Address Added Successfully
                  </label>
                </div>
              </div>
              <div>
                <div className="my-4 mx-5">
                  <p
                    htmlFor="name"
                    className="block font-bold text-tertiary mb-0 "
                  >
                    Shipping Address
                  </p>
                  <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
                </div>
                <form
                  className={`text-sm md:text-lg mx-5 hidden`}
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex mb-2">
                    <div className="w-1/2 pr-2">
                      <label htmlFor="name" className="block">
                        First Name
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={
                          submittedValues?.firstName ||
                          formValues.firstName ||
                          ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="name" className="block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={
                          submittedValues?.lastName || formValues.lastName || ""
                        }
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="mr-2">
                      <label htmlFor="name" className="block font-bold">
                        Country / Region
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="townCity"
                        name="townCity"
                        placeholder="United States"
                        value={"United States "}
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block">
                        Street Address
                        <span className="text-primary-red">*</span>
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          placeholder="House number and street name"
                          value={
                            submittedValues?.streetAddress ||
                            formValues.streetAddress ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full mr-2"
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          id="apartment"
                          name="apartment"
                          placeholder="Apartment, suite, unit etc. (optional)"
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-full mr-2">
                      <label htmlFor="name" className="block">
                        Town / City
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="townCity"
                        name="townCity"
                        placeholder="town / city name"
                        value={
                          submittedValues?.townCity || formValues.townCity || ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="w-full mr-2">
                      <label htmlFor="name" className="block">
                        State
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State / Province / Region Name"
                        value={submittedValues?.state || formValues.state || ""}
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="block">
                        ZIP Code
                        <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        placeholder="ZIP code"
                        value={
                          submittedValues?.zipCode || formValues.zipCode || ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex  mb-2">
                    <div className="w-full mr-2">
                      <label htmlFor="number" className="block">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone number"
                        value={
                          submittedValues?.phoneNumber ||
                          formValues.phoneNumber ||
                          ""
                        }
                        required
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="block ">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email address"
                        value={submittedValues?.email || formValues.email || ""}
                        className="border border-gray rounded-md p-2 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      disabled={!isFormComplete}
                      type="submit"
                      className={`bg-secondary rounded-lg text-primary px-6 py-3  hover:bg-primary-red ${
                        !isFormComplete &&
                        "opacity-50 text-gray cursor-not-allowed"
                      }`}
                    >
                      Add
                    </button>
                  </div>
                </form>
                <div className={`mx-6 flex items-center`}>
                  <input
                    type="radio"
                    id="myCheckbox"
                    name="myCheckbox"
                    value="true"
                    checked
                  />
                  <label for="myCheckbox" className="pl-2 text-secondary">
                    Same as Billing address
                  </label>
                </div>
                <div className={`mx-6 flex items-center`}>
                  <input
                    type="radio"
                    id="myCheckbox"
                    name="myCheckbox"
                    value="true"
                    checked={isSubmitComplete}
                    onChange={handleCheckboxChange}
                  />
                  <label for="myCheckbox" className="pl-2 text-secondary">
                    Add Other Shipping address
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full col-spn-1">
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
