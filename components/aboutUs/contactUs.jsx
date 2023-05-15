import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

import { aboutInfo } from "../../utils/About-demo";

const ContactUs = () => {
  const [index, setIndex] = useState(0);
  const [headingText, setHeadingText] = useState("");

  return (
    <>
      <main className="bg-primary h-auto">
        <div className="p-8 mx-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-secondary text-white">
            CONTACT US
          </h2>

          {/* contact us */}
          <div className="grid md:grid-cols-2 w-full">
            <div className="grid md:grid-cols-1 w-full">
              <div className="w-full">
                <form className="space-y-2">
                  <div>
                    <h1
                      htmlFor="name"
                      className="block font-bold text-secondary mb-2"
                    >
                      CONTACT US FOR ANY QUESTIONS
                    </h1>
                    <label htmlFor="name" className="block mb-2">
                      Your Name
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
                      placeholder="Email Address"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="text" className="block mb-2">
                      Your Subject
                    </label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      placeholder="Your Subject"
                      required
                      className="border border-gray rounded-md p-2 w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      placeholder="Write Here"
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
            <div className="w-full md:border md:border-r-0 md:border-t-0 md:border-b-0 md:ml-4 md:border-gray">
              <div className="pl-4">
                <h1 htmlFor="name" className="text-gray">
                  INFORMATION QUESTIONS
                </h1>
                <h3
                  htmlFor="name"
                  className="block font-bold text-secondary mb-2"
                >
                  FREQUENTLY ASKED QUESTIONS
                </h3>
              </div>
              <div className="padding_inside mt-8 w-full flex flex-col justify-between bg-white m-4">
                <div className="mb-3  w-full flex flex-col">
                  {aboutInfo.map((info, index) => {
                    return (
                      <div>
                        <div
                          onClick={() =>
                            headingText !== info.title
                              ? setHeadingText(info.title)
                              : setHeadingText("")
                          }
                          className="flex justify-between items-center"
                        >
                          <h1 className="mb-0 mt-4 md:pr-10 font-semibold">
                            {info.title}
                          </h1>
                          <span>
                            <FaCaretDown />
                          </span>
                        </div>
                        <p
                          className={`${
                            headingText === info.title ? "block" : "hidden"
                          } leading-relaxed ml-5 text-lg `}
                        >
                          <ul className="list-disc">
                            <li>
                              <span className="text-ash text-xl font-medium">
                                {info.details}
                              </span>
                            </li>
                          </ul>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
