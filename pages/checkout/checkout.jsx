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
import Link from "next/link";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const shippingCost = useSelector(selectShippingCost);

  /// new checkout details
  const [billingAddress, setBillingAddress] = useState(null);
  const [isBillingAddressComplete, setIsBillingAddressComplete] =
    useState(false);
  const [isOtherAddressChecked, setIsOtherAddressChecked] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [isShippingAddressComplete, setIsShippingAddressComplete] =
    useState(false);

  const [isOkForPayment, setIsOkForPayment] = useState(false);

  const [isShippingFormComplete, setIsShippingFormComplete] = useState(false);

  const handleBillingFormSubmit = (data) => {
    setBillingAddress(data);
    setIsBillingAddressComplete(true);
  };
  const handleShippingFormSubmit = (data) => {
    setShippingAddress(data);
    setIsShippingAddressComplete(true);
    setIsOkForPayment(false);
  };

  const handleSetAddress = () => {
    if (!isOtherAddressChecked) {
      setShippingAddress(billingAddress);
    }
    setIsOkForPayment(true);
  };

  return (
    <>
      <main className=" h-auto relative ">
        <div className="relative padding_inside">
          <CustomizedBreadcrumbs />
        </div>
        <div className="w-full md:hidden ">
          <div className="">
            <div className="">
              <CheckOut
                cartItems={cartItems}
                cartTotal={cartTotal}
                shippingCost={shippingCost}
              />
            </div>
          </div>
        </div>
        <div className="max-w-md">
          <PaymentForm
            applicationId="sandbox-sq0idb-_aDTylsZi26CflA7NzVtxA"
            cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
              const response = await axiosInstance.post(
                "/car/product/payment",
                {
                  sourceId: token.token,
                  billingAddress: billingAddress,
                  shippingAddress: shippingAddress,
                }
              );
              console.log("This is response from backend: ", response);
            }}
            locationId="LWT2TDD6X98ST"
          >
            <CreditCard />
          </PaymentForm>
        </div>
      </main>
    </>
  );
}
