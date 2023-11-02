import React from "react";
import { AnimatedText } from "../../Update/AnimationTextChange";

const UserForm = () => {
  return (
    <div className="text-white w-full relative md:px-[3rem] lg:px-[4rem] xl:px-[5rem]  overflow-hidden">
      <div
        style={{
          backgroundImage: `url("/new/rfq_home.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}
        className="py-10 px-5 rounded-lg flex flex-col md:flex-row gap-5"
      >
        <div className="w-full md:w-1/2 ">
          <h3>Request for Quotations (RFQ)</h3>
          <div className="min-h-[40px]">
            <AnimatedText />
          </div>
          <button className="bg-white rounded-md px-6 py-2 text-yellow-600 my-5">
            View More
          </button>
          <ul className="list-disc pl-3.5 mt-5">
            <li className="pb-2">Submit a RFQ just a minute</li>
            <li className="pb-2">Get Multiple question from supplier</li>
            <li className="pb-2">Compare and choose the best Quotations</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full h-full bg-white text-black p-8 rounded-lg">
            <h3>Get Quotations Now</h3>
            <form action="">
              <div>
                <input
                  type="text"
                  placeholder="Please enter a specific product name"
                  class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-full bg-gray-50 sm:text-xs focus:outline-none"
                />
              </div>
              <div className="flex gap-10 py-5">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Quantity"
                    class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-full bg-gray-50 sm:text-xs focus:outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Please enter Category"
                    class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-full bg-gray-50 sm:text-xs focus:outline-none"
                  />
                </div>
              </div>
              <div className="mx-2 pt-3 w-1/2">
                <button
                  type="submit"
                  className=" w-full  rounded-full mx-auto text-center px-5 py-3 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400"
                >
                  Submit For Quotations
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
