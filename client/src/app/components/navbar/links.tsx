"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LinksNavbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <ul className="flex justify-center gap-5 capitalize md:text-2xl ">
      <li>
        <Link
          href="/home"
          className={`hover:bg-primary100 hover:text-bg100 px-4 py-2 rounded-md hover:text-xl  duration-300 ${
            pathname === "/home" && "bg-primary100 text-bg100"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/dev"
          className={`hover:bg-primary100 hover:text-bg100 px-4 py-2 rounded-md hover:text-xl  duration-300 ${
            pathname === "/dev" && "bg-primary100 text-bg100"
          }`}
        >
          Developer
        </Link>
      </li>
      <li>
        <Link
          href="/req"
          className={`hover:bg-primary100 hover:text-bg100 px-4 py-2 rounded-md hover:text-xl  duration-300 ${
            pathname === "/req" && "bg-primary100 text-bg100"
          }`}
        >
          Request
        </Link>
      </li>
    </ul>
  );
};

export default LinksNavbar;
