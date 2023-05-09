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
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mx-1 h-9 w-9 rounded-full bg-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mx-1 h-9 w-9 rounded-full bg-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mx-1 h-9 w-9 rounded-full bg-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mx-1 h-9 w-9 rounded-full flex justify-center items-center bg-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <FaGoogle className="text-sm" />
              </button>
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
                className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-honey"
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
