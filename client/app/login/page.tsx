"use client";
import React, { useState, useEffect } from "react";
import { setCookie } from "cookies-next";

import Image from "next/image";
import axiosClient from "../utils/api";

function Login() {
  const [input, setInput] = useState<any>({
    password: "",
    email: "",
  });

  const [err, setError] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const callAPI = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post("users/auth", input);
      setCookie("data", {
        name: `${res.data.data.name}`,
        email: `${res.data.data.email}`,
        id: `${res.data.data.id}`,
      });
      setTimeout(() => {
        window.location.pathname = "/";
      }, 1000);

      // setCookie("data",);
    } catch (err) {
      setError(
        <div
          role="alert"
          className="rounded  z-[45678987654]  w-fit absolute  bottom-5 left-5 shadow-md border-s-4 border-red-500 bg-red-50 p-4"
        >
          <strong className="block font-medium text-red-800">
            {err.response.data.message}
          </strong>
        </div>
      );
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Pattern"
            width={500}
            height={1000}
            src="https://images.unsplash.com/photo-1581893720303-9d33c0981739?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center  text-center	 lg:text-start md:text-start	 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-p" href="/">
              <span className="sr-only">Home</span>

              <Image
                src="/favicon.ico"
                alt="icon"
                className="h-8 sm:h-10"
                width={50}
                height={100}
              />
            </a>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to ResaLesa 🏘️
            </h1>
            <form action="#" className="mt-8  grid grid-cols-6 gap-6">
              <div className="col-span-6 ">
                <label
                  htmlFor="Email"
                  className="block cursor-pointer	 text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  onChange={handelChange}
                  className="mt-1 w-full rounded-md border-black bg-white text-lg text-gray-700 focus:shadow-lg outline-0 "
                />
              </div>
              <div className="col-span-6  sm:col-span-3 w-full">
                <label
                  htmlFor="Password"
                  className="block text-sm cursor-pointer	 font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  onChange={handelChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white focus:shadow-lg text-sm text-gray-700 shadow-sm outline-0 border-none"
                />
                {err}
              </div>

              <div
                className="col-span-6 sm:flex sm:items-center flex-wrap	 sm:gap-4"
                onClick={callAPI}
              >
                <button className="inline-block shrink-0 rounded-md border border-p bg-p px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-p focus:outline-none focus:ring active:text-blue-500">
                  Login
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  <a href="/for-pass" className="text-gray-700 underline">
                    Forget Password
                  </a>
                </p>
                <div
                  className="w-full flex flex-wrap	
                "
                >
                  <p className="mt-4 w-full text-sm text-gray-500 sm:mt-0">
                    Create New Account?
                    <a href="/register" className="text-gray-700 underline">
                      Register
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
