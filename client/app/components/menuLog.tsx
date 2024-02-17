"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { deleteCookie } from "cookies-next";

function MenuLog({ name }) {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className="relative"
      onClick={() => {
        menu ? setMenu(false) : setMenu(true);
      }}
    >
      <div
        className={`rounded-md  cursor-pointer px-5 py-2.5 text-md font-medium text-black duration-300 flex justify-between items-center gap-2 text-[1.2rem]  hover:text-p hover:bg-white hover:shadow-lg hover:text-[1.3rem]`}
      >
        <CgProfile />

        {name}
      </div>
      <div
        className={`absolute z-[-4567]  top-0 left-1 w-full h-fit ${
          menu ? " translate-y-0" : "-translate-y-48"
        } pt-12 flex justify-center duration-300 bg-white shadow-md rounded-md `}
      >
        <ul className="flex justify-center gap-2 p-2 flex-wrap text-black capitalize">
          <Link
            href="/profile"
            className="cursor-pointer hover:text-lg duration-300"
          >
            profile
          </Link>
          <li
            onClick={() => {
              deleteCookie("data");
              window.location.reload();
            }}
            className="cursor-pointer hover:text-lg duration-300"
          >
            logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLog;
