import React from "react";

//react hook form for form data handling
import { useForm } from "react-hook-form";

export default function AddressInput({ submitHandler }) {
  //react hook form for data handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form
      className={`text-sm md:text-lg}`}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="flex mb-2 md:mb-4 gap-x-5 ">
        <div className="w-1/2">
          <label htmlFor="name" className="block">
            First Name
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: true })}
            className="border border-gray rounded-sm p-2 w-full"
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
            {...register("lastName")}
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>
      <div className="flex mb-4 gap-x-5">
        <div className="w-full">
          <label htmlFor="country" className="block">
            <span>Country</span> / <span>Region</span>
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            {...register("country", { required: true })}
            className="border border-gray rounded-sm p-2 w-full"
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
              {...register("streetAddress", { required: true })}
              className="border border-gray rounded-sm p-2 w-full mr-2"
            />
            <input
              type="text"
              id="apartment"
              name="apartment"
              className="border border-gray rounded-sm p-2 w-full"
              {...register("apartment")}
            />
          </div>
        </div>
      </div>
      <div className="mb-4 flex gap-x-5">
        <div className="w-full">
          <label htmlFor="name" className="block">
            Town / City
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="townCity"
            name="townCity"
            {...register("townCity", { required: true })}
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>

        <div className="w-full">
          <label htmlFor="name" className="block">
            State
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            {...register("state", { required: true })}
            className="border border-gray rounded-sm p-2 w-full"
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
            {...register("zipCode", { required: true })}
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>

      <div className="flex  mb-4 gap-x-5">
        <div className="w-full">
          <label htmlFor="number" className="block">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            {...register("phoneNumber")}
            className="border border-gray rounded-sm p-2 w-full"
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
            {...register("email")}
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className={`bg-customTheme rounded-lg text-primary px-6 py-3  hover:bg-primary-red`}
        >
          Add Address
        </button>
      </div>
    </form>
  );
}
