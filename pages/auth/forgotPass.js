import React from "react";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";

const forgotPass = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-primary mt-24">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/5 max-w-3xl">
          {/* Forgot Password section */}
          <div className="w-full p-5">
          <div className="text-center md:text-left  font-bold">
            <span className="text-honey">Honey</span>Hut
            <span className="text-tertiary">.com</span>
          </div>
            <div className="py-8">
              <h2 className="text-3xl font-bold text-secondary mb-2 pb-4">
                Forgot Your Password
              </h2>
              <div className="flex flex-col items-center">
                
                <div className="bg-primary w-3/5 p-2 flex items-center mb-6 rounded-lg">
                  <FaRegEnvelope className="text-gray-400 m-1" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <Link
                  href="/auth/signin"
                  className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-honey"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default forgotPass;
