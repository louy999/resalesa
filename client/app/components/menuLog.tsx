"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { deleteCookie, getCookie } from "cookies-next";

function MenuLog({ name }: any) {
  const [menu, setMenu] = useState(false);
  const [dataLoginUser, setDataLoginUser] = useState<any>(null);
  useEffect(() => {
    const cookieData = getCookie("data");
    if (cookieData !== undefined) {
      try {
        const parsedData = JSON.parse(cookieData);
        setDataLoginUser(parsedData);
      } catch (error) {
        console.error("Error parsing cookie data:", error);
      }
    }
  }, []);

  return (
    <div
      className="relative"
      onClick={() => {
        menu ? setMenu(false) : setMenu(true);
      }}
    >
      <div
        className={`rounded-md  cursor-pointer px-5 py-2.5 text-md font-medium text-black duration-300 flex justify-between items-center gap-2 text-[1.2rem] `}
      >
        <div className="dropdown-container justify-center">
          <div className="dropdown">
            <label className="btn bg-p flex gap-2 my-2">
              <CgProfile />
              {name}
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-center text-white"></div>
          </div>
        </div>
      </div>
      <div
        className={`absolute z-[-4567]  top-0 left-1 w-full h-fit ${
          menu ? " translate-y-8" : "-translate-y-60"
        } pt-12 flex justify-center duration-300 bg-white shadow-md rounded-md `}
      >
        <ul className="flex justify-center gap-2 p-2 flex-wrap text-black w-fit  capitalize">
          <div className="shadow-md bg-p  p-1 rounded-md  text-white flex flex-wrap gap-1 mb-2">
            <div className="capitalize flex w-full">
              name: {dataLoginUser?.name}
            </div>

            <div className="capitalize flex w-full">
              email: {dataLoginUser?.email}
            </div>
            <div className="capitalize flex w-full">
              phone: {dataLoginUser?.phone}
            </div>
          </div>
          <li
            onClick={() => {
              deleteCookie("data");
              window.location.reload();
            }}
            className="dropdown-item text-sm bg-p text-center"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLog;
