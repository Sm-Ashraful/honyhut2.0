import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setCurrentUser } from "../../Store/customer/user/user.action";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const currentUser = {
    email: email,
    password: password,
  };

  const user = useSelector((state) => state.auth);

  const loginFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentUser(currentUser));
  };

  useEffect(() => {
    if (user.authenticate) {
      router.push("/");
    }
  }, [user]);

  return (
    <main className="relative top-[8.09rem] md:top-[9.4rem] lg:top-[9.3rem] w-full bg-primary md:flex md:justify-center overflow-visible md:items-center ">
      <div className="bg-white flex justify-center items-center  w-full text-center md:rounded-2xl md:shadow-2xl md:px-16 md:flex md:w-3/5 md:max-w-4xl">
        {/* Sign in section */}
        <div className="w-full py-5">
          <div>
            <h2 className="text-3xl font-bold mb-2 uppercase">Sign in</h2>
            <div className="border-2 w-10 border-black inline-block mb-2"></div>
            {/* social login section */}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-black rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaFacebookF className="text-sm lg:text-base" />
              </a>
              <a
                href="#"
                className="border-2 border-black rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-black rounded-full p-3 mx-2 hover:bg-honey"
              >
                <FaGoogle className="text-sm lg:text-base" />
              </a>
            </div>
            <p className="my-6 uppercase">or</p>
            <form
              className="flex flex-col items-center"
              onSubmit={loginFormSubmit}
            >
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded">
                <FaRegEnvelope className="text-gray m-2" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="bg-primary outline-none text-sm lg:text-base flex-1 w-full"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="bg-primary w-3/4 p-2 flex items-center mb-3 rounded">
                <MdLockOutline className="text-gray m-2" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="bg-primary outline-none text-sm lg:text-base flex-1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between w-3/4 mb-5">
                <Link
                  href="/auth/forgotPass"
                  className="text-sm md:text-base mt-1 cursor-pointer text-secondary hover:text-honey"
                >
                  Forgot your Password?
                </Link>
              </div>

              <button
                href="/"
                className=" border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-honey"
              >
                Sign In
              </button>
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
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
