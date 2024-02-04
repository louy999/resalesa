"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../lib/data";
import { useSearchParams } from "next/navigation";

function BarType({ color }) {
  const BarTypeLink = () => {
    const searchParams = useSearchParams();

    return data?.dataType.map((n, a) => (
      <li
        key={a}
        className={`${
          n.href === `?type=${searchParams.get("type")}`
            ? " text-white  bg-p"
            : `text-${color}`
        } rounded-md  hover:text-white hover:bg-p`}
      >
        <Link
          className={` 
        shrink-0 rounded-lgp-2 text-sm w-fit font-sm md:font-md md:text-lg md:px-2 md:py-3 duration-100`}
          href={`${n.href}`}
        >
          {n.name}
        </Link>
      </li>
    ));
  };
  return <BarTypeLink />;
}

export default BarType;
