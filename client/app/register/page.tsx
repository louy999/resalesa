"use client";
import React, { useState, useEffect } from "react";
import { setCookie } from "cookies-next";

import Image from "next/image";
import axiosClient from "../utils/api";
import Link from "next/link";

function Register() {
  const [input, setInput] = useState<any>({
    password: "",
    name: "",
    phone: "",
    email: "",
  });
  const [err, setError] = useState<any>("");
  const [con, setCon] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const callAPI = async (e: any) => {
    e.preventDefault();
    if (input.name !== "") {
      if (input.email !== "") {
        if (input.phone !== "") {
          if (input.password !== "") {
            try {
              const res = await axiosClient.post("users/", input);
              setCookie("data", {
                name: `${res.data.data.name}`,
                email: `${res.data.data.email}`,
                id: `${res.data.data.id}`,
                phone: `${res.data.data.phone}`,
              });
              setCon(
                <div className="alert bg-p absolute bottom-5 left-5 w-fit">
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
                    <span className="text-white capitalize">
                      login successful
                    </span>
                  </div>
                </div>
              );
              setTimeout(() => {
                window.location.pathname = "/";
              }, 1000);
              // setCookie("data",);
            } catch (error: any) {
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
                    <span className="text-content2">
                      {" "}
                      {error.response.data.message}
                    </span>
                  </div>
                </div>
              );
              setTimeout(() => {
                setError("");
              }, 5000);
            }
          } else {
            setError("write your Password");
          }
        } else {
          setError("write your phone");
        }
      } else {
        setError("write your email");
      }
    } else {
      setError("write your name");
    }
  };

  return (
    <section className="bg-border h-[100vh] overflow-hidden">
      <div className="flex justify-center items-center h-screen">
        <main className="flex items-center justify-center  text-center  lg:text-start md:text-start	 px-4 py-4  sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 w-full md:w-4/6 ">
          <div className="w-full flex justify-center flex-wrap">
            <h1 className="mt-8 capitalize text-2xl w-full text-center font-bold text-content1 sm:text-3xl md:text-4xl">
              join with{" "}
              <span className=" font-extrabold text-p"> 22Deal🏘️</span>
            </h1>
            <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-2 sm:p-12">
              {/* <div className="flex w-full flex-col gap-2">
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
                </div>
              </div>
              <div className="divider my-4 text-xs text-content2">
                or continue with
              </div> */}

              <div className="form-group capitalize">
                <Link href="/" className="block text-p">
                  <span className="sr-only">Home</span>
                </Link>
                {con}
                <div className="text-p uppercase text-xl">{err}</div>

                <div className="form-field">
                  <label className="form-label">your name</label>

                  <input
                    placeholder="Type here"
                    type="name"
                    id="name"
                    name="name"
                    onChange={handelChange}
                    className="input max-w-full"
                  />
                </div>
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
                  <label className="form-label">your phone</label>

                  <input
                    placeholder="Type here"
                    type="number"
                    id="phone"
                    name="phone"
                    onChange={handelChange}
                    className="input max-w-full"
                  />
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
                </div>

                <div className="form-field">
                  <div className="form-control justify-between">
                    <label className="form-label">
                      <Link
                        href="/"
                        className="link link-underline-hover text-p text-sm"
                      >
                        Forgot your password?
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-field pt-3">
                  <div
                    onClick={callAPI}
                    className="form-control justify-between"
                  >
                    <button
                      type="button"
                      className="btn text-p w-full hover:text-backgroundSecondary hover:bg-p"
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <div className="form-field">
                  <div className="form-control">
                    <Link
                      href="/login"
                      className="link link-underline-hover text-p text-sm"
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

export default Register;
