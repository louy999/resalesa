import React from "react";
import Link from "next/link";

const AuthLink = () => {
  return (
    <ul>
      <li className="bg-primary100 text-bg100 px-4 py-2 rounded-md hover:p-2 hover:text-xl duration-300">
        <Link href="">Login</Link>
      </li>
    </ul>
  );
};

export default AuthLink;
