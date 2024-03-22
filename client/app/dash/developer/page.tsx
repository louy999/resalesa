"use client";
import React, { useState, useEffect } from "react";

import axiosClient from "../../utils/api";
import AddDevBtn from "../components/AddDevBtn";
import Image from "next/image";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsersAPi = async () => {
      try {
        const res = await axiosClient.get("/dev");
        setData(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsersAPi();
  }, []);

  return (
    <div className="absolute top-24 left-[50%] translate-x-[-50%] mt-4 z-[23456789">
      <h1 className="text-5xl flex justify-between text-p m-4">
        <span>Developers</span>
        <AddDevBtn />
      </h1>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 flex-wrap">
        {data.map((d, a) => (
          <article
            key={a}
            // onClick={(e) => {
            //   e.preventDefault;
            //   router.push(`?id=${d.id}`);
            // }}
            className="hover:animate-background relative bg-gray-200 text-black select-none rounded-xl  bg-gradient-to-r p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div className="rounded-[10px]  p-4 !pt-3 sm:p-6">
              <Image
                width={1000}
                height={1000}
                alt="Lava"
                src={`${d.developer_img}`}
                className="h-56 w-56 m-auto rounded-full object-cover drop-shadow-2xl mb-2 transition group-hover:grayscale-[50%]"
              />

              <div className="">
                <h3 className="mt-0.5 text-lg font-medium  text-gray-900">
                  {d.developer_name}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {d.location_dev.map((l: any, b: any): any => (
                  <>
                    <span className="whitespace-nowrap uppercase rounded-full bg-rose-50 px-2.5 py-0.5 text-xs text-p">
                      {l}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Page;
