"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiNotification3Line } from "react-icons/ri";
import data from "../lib/data";
import { usePathname } from "next/navigation";
import BarType from "./BarType";
import { CgProfile } from "react-icons/cg";
import { getCookie, deleteCookie } from "cookies-next";
import axiosClient from "../utils/api";
import MenuLog from "./menuLog";

function Header() {
  const [background, setBackground] = useState("");
  const [auth, setAuth] = useState("");
  const [textColor, setTextColor] = useState("white");
  const [renderBar, setRenderBar] = useState(true);
  const [hidePath, setHidePath] = useState(true);
  const [hideRespond, setHideRespond] = useState(true);
  const [openNav, setOpenNav] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (getCookie("data") !== undefined) {
      setAuth(JSON.parse(getCookie("data")));
    }
  }, []);
  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      if (window.innerWidth < 760) {
        setHideRespond(false);
      } else {
        setHideRespond(true);
      }
    };
    window.addEventListener("resize", updateWindowWidth);
  }, []);
  const handelOpenNav = () => {
    if (hideRespond) {
      setHideRespond(false);
    } else {
      setHideRespond(true);
    }
    console.log("open");
  };
  const handelOpenNotification = () => {
    if (openNotification) {
      setOpenNotification(false);
    } else {
      setOpenNotification(true);
    }
    console.log("open");
  };
  useEffect(() => {
    const handleBar = () => {
      if (pathname === "/req") {
        if (window.scrollY < 100) {
          setRenderBar(true);
        } else {
          setRenderBar(false);
        }
      } else {
        if (window.scrollY < 620) {
          setRenderBar(true);
        } else {
          setRenderBar(false);
        }
      }
    };
    window.addEventListener("scroll", handleBar);
  }, []);

  const NavLink = () => {
    return data?.dataNavLink.map((n, a) => (
      <li key={a} className="">
        <Link
          className={`${
            pathname === n.href ? "text-p " : `text-black `
          } transition text-[1.1rem] hover:text-p  hover:text-[1.2rem] duration-300`}
          href={`${n.href}`}
        >
          {n.name}
        </Link>
      </li>
    ));
  };

  return (
    <header
      className={`bg-white ${
        hidePath ? "" : "hidden"
      } select-none fixed w-full lg:translate-x-[-50%] z-[45678987545678765] lg:left-[50%] lg:top-2 lg:rounded-lg shadow-lg lg:w-[70%] duration-300`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 " href="/">
              <Image src="/logo2.ico" alt="logo" width={50} height={50} />
            </Link>
          </div>

          <div
            className={`md:block  ${
              hideRespond ? " opacity-100" : " opacity-0"
            } duration-200`}
          >
            <nav aria-label="Global relative ">
              <ul
                className={`flex items-center ${
                  openNav ? "" : "hidden"
                }flex-wrap bg-white md:flex-nowrap md:bg-transparent w-[100vw] justify-center  md:w-fit left-0 top-16	absolute md:static gap-6 text-sm`}
              >
                {renderBar ? <NavLink /> : <BarType color={"black"} />}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {!auth ? (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-p px-5 py-2.5 text-sm font-medium text-white shadow hover:text-[1.1rem] duration-300"
                  href="/login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-p hover:text-[1.1rem]  duration-300"
                    href="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                {/* <div
                  className=" relative"
                  onClick={() => {
                    handelOpenNotification();
                  }}
                >
                  <span className=" absolute top-[-15px]  left-[-15px] text-p text-sm ">
                    +99
                  </span>
                  <RiNotification3Line className=" cursor-pointer hover:w-7 hover:h-7 duration-300 hover:text-p w-5 h-5 relative " />
                  <div
                    className={` ${
                      openNotification ? " opacity-100" : " hidden opacity-0"
                    } duration-200 absolute bg-white scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 right-0 ml-[-9999px]  top-[2.6em] shadow-lg rounded-md h-[40vh] overflow-y-scroll p-2`}
                  >
                    <h2 className="text-p text-2xl border-b-2 m-b-2 border-b-slate-400">
                      Notifications
                    </h2>
                    <div className="shadow-md rounded-md bg-slate-100 my-2 p-1 w-[20vw]">
                      hi
                    </div>
                  </div>
                </div> */}

                <MenuLog name={auth.name} />
              </div>
            )}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => {
                  handelOpenNav();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
