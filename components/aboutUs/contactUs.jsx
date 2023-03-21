import React from 'react';

export default function Checkout() {
  return (
    <>
      <main className="bg-primary h-auto top-36 md:top-12">
        <div className="p-8 mx-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-secondary text-white">
          ABOUT US
          </h2>

          <div className="grid md:grid-cols-2 w-full">
            <div className="w-full">
              <form className="space-y-2">
                <div className="">
                  <div>
                    <h1 htmlFor="name" className="block font-bold text-secondary mb-2">
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
          </div>
      </main>
    </>
  );
}
