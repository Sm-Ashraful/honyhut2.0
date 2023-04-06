import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline, MdOutlinePeople } from "react-icons/md";

const signup = () => {
  return (
    <main className="relative top-36 md:top-48 w-full bg-primary md:flex md:justify-center md:items-center md:p-10">
      <div className="bg-white flex justify-center items-center  w-full text-center md:rounded-2xl md:shadow-2xl md:px-16 md:flex md:w-3/5 md:max-w-4xl">
        {/* Sign up section */}
        <div className="w-full p-5">
          <div className="text-center md:text-left  font-bold">
            <span className="text-honey">Honey</span>Hut
            <span className="text-tertiary">.com</span>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-2 uppercase">
              Create An Account
            </h2>
            <div className="border-2 w-10 border-secondary inline-block mb-2"></div>
            {/* social login section */}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-secondary rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaFacebookF className="text-sm lg:text-base" />
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
                <FaGoogle className="text-sm lg:text-base" />
              </a>
            </div>
            <p className="my-6 uppercase">or</p>
            <div className="flex flex-col items-center">
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded-lg">
                <MdOutlinePeople className="text-gray m-1" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-primary outline-none text-sm lg:text-base flex-1"
                />
              </div>
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded-lg">
                <FaRegEnvelope className="text-gray m-1" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-primary outline-none text-sm lg:text-base flex-1"
                />
              </div>
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded-lg">
                <MdLockOutline className="text-gray m-1" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="bg-primary outline-none text-sm lg:text-base flex-1"
                />
              </div>

              <Link
                href="/"
                className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-honey"
              >
                Sign Up
              </Link>
              <div className=" flex ">
                <p className="ml-2 py-4">
                  Already have an account!
                  <Link
                    href="/auth/signin"
                    className=" ml-2 px-4 py-4 text-secondary hover:text-honey font-semibold"
                  >
                    Sign In
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

export default signup;
