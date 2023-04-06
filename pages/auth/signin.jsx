import React from "react";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const SignIn = () => {
  return (
    <main className="relative top-36 md:top-48 w-full bg-primary md:flex md:justify-center overflow-visible md:items-center md:p-10">
      <div className="bg-white flex justify-center items-center  w-full text-center md:rounded-2xl md:shadow-2xl md:px-16 md:flex md:w-3/5 md:max-w-4xl">
        {/* Sign in section */}
        <div className="w-full py-5">
          <div className="text-center md:text-left  font-bold">
            <span className="text-honey">Honey</span>Hut
            <span className="text-tertiary">.com</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-2 uppercase">
              Sign in
            </h2>
            <div className="border-2 w-10 border-secondary inline-block mb-2"></div>
            {/* social login section */}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-secondary rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-secondary rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-secondary rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className="my-6 uppercase">or</p>
            <div className="flex flex-col items-center">
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded">
                <FaRegEnvelope className="text-gray m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-primary outline-none text-sm lg:text-base flex-1"
                />
              </div>
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded">
                <MdLockOutline className="text-gray m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-primary outline-none text-sm lg:text-base flex-1"
                />
              </div>
              <div className="flex justify-between w-3/4 mb-5">
                <label className="flex items-center text-sm lg:text-base mt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-2 mb-1"
                  />
                  Remember me
                </label>
                <Link
                  href="/auth/forgotPass"
                  className="text-sm md:text-base mt-1 cursor-pointer text-secondary hover:text-honey"
                >
                  Forgot your Password?
                </Link>
              </div>

              <Link
                href="/auth/signin"
                className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-honey"
              >
                Sign In
              </Link>
              <div className=" flex ">
                <p className="ml-2 py-4">
                  Don't you have account yet?
                  <Link href="/auth/signup">
                    <button className=" ml-2 px-4 py-4 text-secondary font-semibold hover:text-honey">
                      Sign Up
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
