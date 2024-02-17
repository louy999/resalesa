"use client";
import React, { useState, useEffect } from "react";
import { setCookie } from "cookies-next";

import Image from "next/image";
import axiosClient from "../utils/api";
import Link from "next/link";

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
      setError(
        <div className="alert bg-red-11 absolute bottom-5 left-5 w-fit">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM18.58 32.58L11.4 25.4C10.62 24.62 10.62 23.36 11.4 22.58C12.18 21.8 13.44 21.8 14.22 22.58L20 28.34L33.76 14.58C34.54 13.8 35.8 13.8 36.58 14.58C37.36 15.36 37.36 16.62 36.58 17.4L21.4 32.58C20.64 33.36 19.36 33.36 18.58 32.58Z"
              fill="#fff"
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-white capitalize">login successful</span>
          </div>
        </div>
      );
      setTimeout(() => {
        window.location.pathname = "/";
      }, 1000);

      // setCookie("data",);
    } catch (err) {
      setError(
        <div className="alert alert-error absolute bottom-5 left-5 w-fit">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z"
              fill="#E92C2C"
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-content2"> {err.response.data.message}</span>
          </div>
        </div>
      );
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <section className="bg-border">
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
            <Link href="/" className="block text-p" href="/">
              <span className="sr-only">Home</span>

              <Image
                src="/favicon.ico"
                alt="icon"
                className="h-8 sm:h-10"
                width={50}
                height={100}
              />
            </Link>
            <h1 className="mt-6 text-2xl font-bold text-content1 sm:text-3xl md:text-4xl">
              Welcome to ResaLesa 🏘️
            </h1>

            <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
              <div className="flex w-full flex-col gap-2">
                <p>Sign in with</p>
                <div className="flex w-full flex-col gap-2">
                  <button type="button" className="btn gap-2 bg-gray-5">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      version="1.1"
                      viewBox="0 0 48 48"
                      enablebackground="new 0 0 48 48"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    <span>Sign up with google</span>
                  </button>
                  <button type="button" className="btn gap-2 bg-gray-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5 text-red-11"
                    >
                      <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                    </svg>
                    <span>Sign up with twitter</span>
                  </button>
                  <button type="button" className="btn gap-2 bg-gray-5">
                    <svg
                      width="21"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      className="svg-inline--fa fa-github fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>

                    <span>Sign up with github</span>
                  </button>
                </div>
              </div>
              <div className="divider my-6 text-xs text-content2">
                or continue with
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label className="form-label">Email address</label>

                  <input
                    placeholder="Type here"
                    type="email"
                    id="Email"
                    name="email"
                    onChange={handelChange}
                    className="input max-w-full"
                  />
                  <label className="form-label">
                    <span className="form-label-alt">
                      Please enter Link valid email.
                    </span>
                  </label>
                </div>
                <div className="form-field">
                  <label className="form-label">
                    <span>Password</span>
                  </label>
                  <div className="form-control">
                    <input
                      placeholder="Type here"
                      type="password"
                      id="Password"
                      name="password"
                      onChange={handelChange}
                      className="input max-w-full"
                    />
                  </div>
                  {err}
                </div>
                <div className="form-field">
                  <div className="form-control justify-between">
                    <label className="form-label">
                      <Link
                        href="/"
                        className="link link-underline-hover text-red-11 text-sm"
                      >
                        Forgot your password?
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-field pt-5">
                  <div
                    onClick={callAPI}
                    className="form-control justify-between"
                  >
                    <button
                      type="button"
                      className="btn text-red-11 w-full hover:text-backgroundSecondary hover:bg-red-11"
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <div className="form-field">
                  <div className="form-control">
                    <Link
                      href="/"
                      className="link link-underline-hover text-red-11 text-sm"
                    >
                      have an account? Sign in
                    </Link>
                  </div>
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
