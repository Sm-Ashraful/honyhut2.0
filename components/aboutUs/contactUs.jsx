import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";

import { aboutInfo } from "../../utils/About-demo";

const Contact = () => {
  const [index, setIndex] = useState(0);
  const [headingText, setHeadingText] = useState("");

  return (
    <>
      <main className="bg-primary h-auto">
        <div className="padding_inside mt-6 md:mt-12">
          {/* contact us */}
          <div className="grid md:grid-cols-2 gap-[20px] w-full">
            <div className="w-full">
              <h3 className="font-bold text-black uppercase font-jakarta">
                CONTACT US FOR ANY QUESTIONS
              </h3>
              <div className="w-full">
                <form className="text-sm font-jakarta">
                  <div className="mb-[15px]">
                    <label htmlFor="name" className="">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-[15px]">
                    <label htmlFor="email" className="block ">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-[15px]">
                    <label htmlFor="text" className="block ">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-[15px]">
                    <label htmlFor="address" className="block">
                      Your Message
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="border border-gray rounded-md p-2 w-full"
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-honey text-black font-bold rounded-md py-2 px-4 w-full hover:bg-gray transition-colors border border-white mt-4"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="w-full">
              <h3
                htmlFor="name"
                className="block font-bold text-black uppercase font-jakarta"
              >
                CONTACT INFORMATION
              </h3>

              <div className="w-full flex flex-col justify-between">
                <div className="mb-3  w-full flex flex-col text-[#878787] font-jakarta">
                  <p className="removeTextShadow pb-4 leading-8 text-lg">
                    We value your feedback and welcome your thoughts on our
                    customer service, merchandise, website, or any other topics
                    you would like to share with us. We appreciate any comments
                    and suggestions you may have, as they help us improve and
                    provide a better experience for our customers. Your input is
                    highly appreciated and will be taken into consideration.
                    Thank you for taking the time to provide us with your
                    valuable feedback.
                  </p>
                  <ul className="">
                    <li className="flex pb-4">
                      <span>
                        <AiOutlineHome />
                      </span>
                      <span className="mx-[10px]">
                        4301 Pleasantdale Rd, Unit G Doraville, GA 30340
                      </span>
                    </li>
                    <li className="flex pb-4">
                      <span>
                        <IoMdCall />
                      </span>
                      <span className="mx-[10px]">+1 931 422 8003</span>
                    </li>
                    <li className="flex pb-4">
                      <span>
                        <TfiEmail />
                      </span>
                      <span className="mx-[10px]">support@honyhut.com</span>
                    </li>
                    <li className="flex pb-4">
                      <span>
                        <MdOutlineWatchLater />
                      </span>
                      <span className="mx-[10px]">24/7 support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
