"use client";
import React, { useState, useEffect } from "react";
import BarType from "./BarType";
import { usePathname } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function RenderBarType({ colorBar }: any) {
  const [renderBar, setRenderBar] = useState(true);
  const pathname = usePathname();

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
  return (
    <div>
      {" "}
      <section
        className={`bg-transparent backdrop-blur-lg lg:backdrop-blur-md md:backdrop-blur-md select-none	w-fit m-auto lg:rounded-lg z-[345678764345678]  md:top-[70vh] duration-300 px-2 py-2`}
      >
        <div className="flex h-16 items-center justify-between">
          <div className=" md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-3 p-3  text-sm md:gap-6  ">
                {renderBar ? <BarType color={colorBar} /> : ""}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RenderBarType;
