import React from "react";
import LinksNavbar from "./links";
import AuthLink from "./auth";

const Navbar = () => {
  return (
    <navbar className="bg-white bg-opacity-40 w-full md:w-fit fixed top-0 md:top-7 left-2/4 -translate-x-2/4 p-2 z-50 md:rounded-md shadow-xl">
      <div className=" flex gap-5 justify-between items-center">
        <LinksNavbar />
        <AuthLink />
      </div>
    </navbar>
  );
};

export default Navbar;
