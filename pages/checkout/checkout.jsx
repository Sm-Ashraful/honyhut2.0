import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import axiosInstance from "../../utils/helper/axios";

import CheckOut from "../../components/checkout";
import {
  selectCartItems,
  selectCartTotal,
  selectShippingCost,
} from "../../Store/cart/cart.selector";
import CustomizedBreadcrumbs from "../../components/Update/BreadCrumbs";
import AddressInput from "./components/AddressInput";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const shippingCost = useSelector(selectShippingCost);

  /// new checkout details
  const [checkoutDetails, setCheckoutDetails] = useState({
    billingAddress: null,
    shippingAddress: null,
    products: [],
    totalAmount: 0,
    orderDate: null,
  });

  const [billingAddress, setBillingAddress] = useState(null);
  const [isBillingAddressComplete, setIsBillingAddressComplete] =
    useState(false);
  const [isOtherAddressChecked, setIsOtherAddressChecked] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [isShippingAddressComplete, setIsShippingAddressComplete] =
    useState(false);

  const [isShippingFormComplete, setIsShippingFormComplete] = useState(false);

  const handleBillingFormSubmit = (data) => {
    setBillingAddress(data);
    setIsBillingAddressComplete(true);
  };
  const handleShippingFormSubmit = (data) => {
    setShippingAddress(data);
    setIsShippingAddressComplete(true);
  };

  return (
    <>
      <main className=" h-auto relative ">
        <div className="relative padding_inside">
          <CustomizedBreadcrumbs />
        </div>
        <div className="w-full md:hidden ">
          <div className="bg-order">
            <div className="">
              <CheckOut
                cartItems={cartItems}
                cartTotal={cartTotal}
                shippingCost={shippingCost}
              />
            </div>
          </div>
        </div>
        <div className="mb-5 px-3 md:px-12">
          <div className="grid md:grid-cols-5 gap-8 w-full">
            <div className="w-full md:col-span-3 order-1 md:order-0">
              <div>
                <div className="my-4 mx-5">
                  <p htmlFor="name" className="block font-bold  mb-0 ">
                    Billing Address
                  </p>
                  <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
                </div>
                {/**billing form */}
                {isBillingAddressComplete ? (
                  <div className={`mx-6`}>
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      name="myCheckbox"
                      value="true"
                      checked
                    />
                    <label for="myCheckbox" className="pl-2 text-blue-800">
                      Billing Address Added Successfully
                    </label>
                  </div>
                ) : (
                  <div className="mx-5">
                    <AddressInput submitHandler={handleBillingFormSubmit} />
                  </div>
                )}
              </div>
              {isBillingAddressComplete && (
                <div className={`my-5`}>
                  <div className="my-4 mx-5">
                    <p
                      htmlFor="name"
                      className="block font-bold text-black mb-0 "
                    >
                      <strong>Shipping Address</strong>
                    </p>
                    <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
                  </div>
                  {isShippingAddressComplete ? (
                    <div className={`mx-6 `}>
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        name="myCheckbox"
                        value="true"
                        checked
                      />
                      <label for="myCheckbox" className="pl-2 text-blue-800">
                        Shipping Address Added Successfully
                      </label>
                    </div>
                  ) : (
                    <div className={``}>
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
                            className="pl-2 text-black"
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
                            className="pl-2 text-black"
                          >
                            Add Other Shipping address
                          </label>
                        </div>
                      </div>
                      <div
                        className={`mx-5 mt-3 ${
                          isOtherAddressChecked ? "block" : "hidden"
                        }`}
                      >
                        <AddressInput
                          submitHandler={handleShippingFormSubmit}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {isBillingAddressComplete && (
                <div className="mx-5  pt-4">
                  <PaymentForm
                    applicationId="sandbox-sq0idb-_aDTylsZi26CflA7NzVtxA"
                    cardTokenizeResponseReceived={async (
                      token,
                      verifiedBuyer
                    ) => {
                      const response = await axiosInstance.post(
                        "/car/product/payment",
                        {
                          sourceId: token.token,
                        }
                      );
                    }}
                    locationId="LWT2TDD6X98ST"
                  >
                    <CreditCard />
                  </PaymentForm>
                </div>
              )}

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
            <div className="col-span-2 hidden md:block order-0 md:order-1 ">
              <div className="sticky top-[7rem]">
                <CheckOut
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  shippingCost={shippingCost}
                ></CheckOut>

                <div className="flex justify-end">
                  <button
                    disabled={!isShippingFormComplete}
                    type="submit"
                    className={`w-full hover:bg-secondaryTextColor rounded-lg text-primary px-6 py-3  bg-primary-red ${
                      !isShippingFormComplete && "hidden"
                    }`}
                  >
                    Proceed Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
