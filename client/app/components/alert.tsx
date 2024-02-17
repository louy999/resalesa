"use client";
import React, { useState, useEffect } from "react";

function Alert() {
  const [alertMessage, setAlertMessage] = useState("hi");

  return <div className=" absolute left-10 bottom-10">{alertMessage}</div>;
}

export default Alert;
