"use client";
import { usePathname } from "next/navigation";

import React from "react";

function Dash() {
  const pathname = usePathname();

  if (pathname === "/dash") {
    window.location.pathname = "/dash/users";
  }

  return <></>;
}

export default Dash;
