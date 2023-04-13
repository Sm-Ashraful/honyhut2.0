import { useState, useEffect } from "react";
import Image from "next/image";

import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";

import CheckOut from "../../components/checkout";
import { getProductByIdSecond } from "../../utils/products-demo";
import { getProductById } from "../../utils/products";
import { getProductByIdThird } from "@/utils/fav-demo-data";

export default function Checkout({ items }) {
  const [selected, setSelected] = useState("");
  const [product, setProduct] = useState(null);

  const route = useRouter();
  const productId = route.query.productId;
  const pathName = route.pathname;

  // if (productId) {
  //   const newProduct =
  //     Number(productId) > 84
  //       ? Number(productId) > 102
  //         ? getProductByIdThird(productId)
  //         : getProductByIdSecond(productId)
  //       : getProductById(productId);

  //   setProduct(newProduct);
  // }

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
  const [shippingFormValues, setShippingFormValues] =
    useState(defaultFormValue);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isShippingFormComplete, setIsShippingFormComplete] = useState(false);
  const [isSubmitComplete, setIsSubmitCompleted] = useState(false);
  const [isShippingSubmitComplete, setIsShippingSubmitCompleted] =
    useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);
  const [shippingSubmittedValues, setIsShippingSubmittedValues] =
    useState(null);
  const [isOtherAddressChecked, setIsOtherAddressChecked] = useState(false);
  const [isPayByCard, setIsPayByCard] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleShippingInputValueChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setShippingFormValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleBillingFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(formValues);
    setIsSubmitCompleted(true);
    setFormValues(defaultFormValue);
  };
  const handleShippingFormSubmit = (e) => {
    e.preventDefault();
    setIsShippingSubmittedValues(shippingFormValues);
    setIsShippingSubmitCompleted(true);
    setShippingFormValues(defaultFormValue);
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
  useEffect(() => {
    const isComplete =
      shippingFormValues.firstName &&
      shippingFormValues.streetAddress &&
      shippingFormValues.townCity &&
      shippingFormValues.state &&
      shippingFormValues.zipCode &&
      shippingFormValues.phoneNumber;
    setIsShippingFormComplete(isComplete);
  }, [shippingFormValues]);

  useEffect(() => {
    console.log("Products Values: ", productId);
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSelected(event.target.value);
  };

  // const handleRadioChange = (event) => {
  //   setIsOtherAddressChecked(event.target.checked);
  // };
  // const handlingPaymentRadioChange = (event) => {
  //   setIsPayByCard(event.target.value === "true");
  // };

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
        <div className="w-full md:hidden">
          <div className="bg-order">
            <div>
              <CheckOut />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="grid md:grid-cols-5 gap-8 w-full">
            <div className="w-full md:col-span-3">
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
                  onSubmit={handleBillingFormSubmit}
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
                    <div className="mr-2 w-full">
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
                    <div className="w-full">
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
                    checked
                  />
                  <label for="myCheckbox" className="pl-2 text-secondary">
                    Billing Address Added Successfully
                  </label>
                </div>
              </div>
              <div className={`${isSubmitComplete ? "" : "blur-[3px]"} my-5`}>
                <div className="my-4 mx-5">
                  <p
                    htmlFor="name"
                    className="block font-bold text-tertiary mb-0 "
                  >
                    <strong>Shipping Address</strong>
                  </p>
                  <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
                </div>
                <div className={`${isShippingSubmitComplete && "hidden"}`}>
                  <form
                    className={`text-sm md:text-lg mx-5 ${
                      isOtherAddressChecked ? "block" : "hidden"
                    }`}
                    onSubmit={handleShippingFormSubmit}
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
                            shippingSubmittedValues?.firstName ||
                            shippingFormValues.firstName ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
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
                            shippingSubmittedValues?.lastName ||
                            shippingFormValues.lastName ||
                            ""
                          }
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
                        />
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <div className="mr-2 w-full">
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
                          onChange={handleShippingInputValueChange}
                        />
                      </div>
                      <div className="w-full">
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
                              shippingSubmittedValues?.streetAddress ||
                              shippingFormValues.streetAddress ||
                              ""
                            }
                            required
                            className="border border-gray rounded-md p-2 w-full mr-2"
                            onChange={handleShippingInputValueChange}
                          />
                          <input
                            type="text"
                            id="apartment"
                            name="apartment"
                            placeholder="Apartment, suite, unit etc. (optional)"
                            className="border border-gray rounded-md p-2 w-full"
                            onChange={handleShippingInputValueChange}
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
                            shippingSubmittedValues?.townCity ||
                            shippingFormValues.townCity ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
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
                          value={
                            shippingSubmittedValues?.state ||
                            shippingFormValues.state ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
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
                            shippingSubmittedValues?.zipCode ||
                            shippingFormValues.zipCode ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
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
                            shippingSubmittedValues?.phoneNumber ||
                            shippingFormValues.phoneNumber ||
                            ""
                          }
                          required
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
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
                          value={
                            shippingSubmittedValues?.email ||
                            shippingFormValues.email ||
                            ""
                          }
                          className="border border-gray rounded-md p-2 w-full"
                          onChange={handleShippingInputValueChange}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        disabled={!isShippingFormComplete}
                        type="submit"
                        className={`bg-secondary rounded-lg text-primary px-6 py-3  hover:bg-primary-red ${
                          !isShippingFormComplete &&
                          "opacity-50 text-gray cursor-not-allowed"
                        }`}
                      >
                        Add
                      </button>
                    </div>
                  </form>
                  <div className="flex justify-between">
                    <div className={`mx-6 flex items-center`}>
                      <input
                        type="radio"
                        id="billingAddress"
                        name="myCheckbox"
                        value="true"
                        checked={!isOtherAddressChecked}
                        onChange={() => setIsOtherAddressChecked(false)}
                      />
                      <label
                        for="billingAddress"
                        className="pl-2 text-secondary"
                      >
                        Same as Billing address
                      </label>
                    </div>
                    <div className={`mx-6 flex items-center`}>
                      <input
                        type="radio"
                        id="otherAddressCheckbox"
                        name="myCheckbox"
                        value="true"
                        checked={isOtherAddressChecked}
                        onChange={() => setIsOtherAddressChecked(true)}
                      />
                      <label
                        for="otherAddressCheckbox"
                        className="pl-2 text-secondary"
                      >
                        Add Other Shipping address
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className={`mx-6 ${
                    isShippingSubmitComplete ? "block" : "hidden"
                  }`}
                >
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    name="myCheckbox"
                    value="true"
                    checked
                  />
                  <label for="myCheckbox" className="pl-2 text-secondary">
                    Shipping Address Added Successfully
                  </label>
                </div>
              </div>
              <div
                className={`my-4 mx-5  ${
                  isShippingSubmitComplete ? "" : "blur-[3px]"
                }`}
              >
                <div>
                  <div className="">
                    <p
                      htmlFor="name"
                      className="block font-bold text-tertiary mb-0 "
                    >
                      Payment
                    </p>
                  </div>
                  <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
                </div>
                <div>
                  <div className="flex justify-between py-3">
                    <div>
                      <input
                        type="radio"
                        id="creditCard"
                        name="payment"
                        value="true"
                        checked={!isPayByCard}
                        onChange={() => setIsPayByCard(false)}
                      />
                      <label for="creditCard" className="pl-2 text-secondary">
                        Card Payment
                      </label>
                    </div>
                    <div className="flex">
                      <div className="w-[32px] max-h-[40px] relative mr-2">
                        <Image src="/logos/visa.svg" fill cover />
                      </div>
                      <div className="w-[32px] max-h-[40px] relative mr-2">
                        <Image src="/logos/mastercard.svg" fill cover />
                      </div>
                      <div className="w-[32px]  max-h-[40px] relative mr-2">
                        <Image src="/logos/discover.svg" fill cover />
                      </div>
                      <div className="w-[32px] max-h-[40px] relative">
                        <Image src="/logos/amex.svg" fill cover />
                      </div>
                    </div>
                  </div>
                  {!isPayByCard && (
                    <form action="post">
                      <div className="mb-2">
                        <label htmlFor="number" className="block">
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
                        <div className="mb-2">
                          <label htmlFor="number" className="block">
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
                        <div className="mb-2">
                          <label htmlFor="number" className="block">
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
                    </form>
                  )}
                  <div>
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="true"
                      checked={isPayByCard}
                      onChange={() => setIsPayByCard(true)}
                    />
                    <label for="paypal" className="pl-2 text-secondary">
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end md:hidden">
                <button
                  disabled={!isShippingFormComplete}
                  type="submit"
                  className={`w-full hover:bg-secondaryTextColor rounded-lg text-primary py-5 text-2xl  bg-primary-red ${
                    !isShippingFormComplete &&
                    "opacity-50 text-gray cursor-not-allowed"
                  }`}
                >
                  Proceed Order
                </button>
              </div>
            </div>
            <div className="col-span-2 hidden md:block">
              <div className="bg-order">
                <div>
                  <CheckOut items={items} />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  disabled={!isShippingFormComplete}
                  type="submit"
                  className={`w-full hover:bg-secondaryTextColor rounded-lg text-primary px-6 py-3  bg-primary-red ${
                    !isShippingFormComplete &&
                    "opacity-50 text-gray cursor-not-allowed"
                  }`}
                >
                  Proceed Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
