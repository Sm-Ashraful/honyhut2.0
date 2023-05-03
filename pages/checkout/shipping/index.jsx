import React from "react";

const ShippingAddress = () => {
  return (
    <div className="relative top-36 md:top-52">
      <div className="my-4 mx-5">
        <p htmlFor="name" className="block font-bold text-tertiary mb-0 ">
          Shipping Address
        </p>
        <hr className="h-[2px]  bg-gray border-0 dark:bg-gray" />
      </div>
      <form className={`text-sm md:text-lg mx-5 `}>
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
              value
              required
              className="border border-gray rounded-md p-2 w-full"
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
              className="border border-gray rounded-md p-2 w-full"
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
                required
                className="border border-gray rounded-md p-2 w-full mr-2"
              />
              <input
                type="text"
                id="apartment"
                name="apartment"
                placeholder="Apartment, suite, unit etc. (optional)"
                className="border border-gray rounded-md p-2 w-full"
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
              required
              className="border border-gray rounded-md p-2 w-full"
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
              required
              className="border border-gray rounded-md p-2 w-full"
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
              required
              className="border border-gray rounded-md p-2 w-full"
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
              required
              className="border border-gray rounded-md p-2 w-full"
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
              className="border border-gray rounded-md p-2 w-full"
            />
          </div>
        </div>
      </form>
      <div>
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
  );
};

export default ShippingAddress;
