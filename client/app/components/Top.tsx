"use client";
import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

function Top() {
  const [renderBar, setRenderBar] = useState(false);

  useEffect(() => {
    const handleBar = () => {
      if (window.scrollY >= 200) {
        setRenderBar(true);
      } else {
        setRenderBar(false);
      }
    };
    window.addEventListener("scroll", handleBar);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: animated scrolling
    });
  };
  return (
    renderBar && (
      <div
        onClick={() => {
          scrollToTop();
        }}
        className="fixed right-5 bottom-5 h-12 w-12 cursor-pointer hover:text-p hover:bg-white duration-300 items-center rounded-md  text-white text-2xl flex justify-center  bg-p z-[456789876542345]"
      >
        <BiArrowToTop />
      </div>
    )
  );
}

export default Top;
