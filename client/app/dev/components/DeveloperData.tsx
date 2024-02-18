"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axiosClient from "../../utils/api";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { Link } from "next/link";
import { useRouter } from "next/navigation";
import GetDeveloper from "./GetDeveloper";
import LikeDev from "./likeDev";

function DeveloperData() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [callHover, setCallHover] = useState(false);
  const [whatsappHover, setWhatsappHover] = useState(false);
  useEffect(() => {
    const dataDeveloper = async () => {
      try {
        const res = await axiosClient.get("/dev");
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataDeveloper();
  }, []);
  return (
    <>
      {data
        .filter((pro) => pro.status === true)
        .map((d, a) => (
          <article
            key={a}
            // onClick={(e) => {
            //   e.preventDefault;
            //   router.push(`?id=${d.id}`);
            // }}
            className="hover:animate-background relative bg-gray-200 select-none rounded-xl  bg-gradient-to-r p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <LikeDev resSearchParams={d.id} />
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
                {d.location_dev.map((l, b) => (
                  <>
                    <span
                      key={b}
                      className="whitespace-nowrap uppercase rounded-full bg-rose-50 px-2.5 py-0.5 text-xs text-p"
                    >
                      {l}
                    </span>
                  </>
                ))}
              </div>
            </div>
            <div className=" w-full flex items-center justify-end gap-5 pb-3 px-4">
              <a
                className="group relative inline-block focus:outline-none focus:ring w-23 h-23 "
                href="/"
              >
                <span className="absolute inset-0 translate-x-1 translate-y-1 bg-green-400 rounded-full  transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                <span className="flex relative items-center  justify-between rounded-full border-2 border-green-600  border-current px-4 py-1 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  <FaWhatsapp className="text-3 h-5 w-5 " />
                </span>
              </a>
              <a
                className="group relative inline-block focus:outline-none focus:ring w-23 h-23 "
                href="/"
              >
                <span className="absolute inset-0 translate-x-1  translate-y-1 bg-p rounded-full  transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                <span className="flex relative items-center  justify-between rounded-full border-2 border-rose-700  border-current px-4 py-1 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  <MdAddCall className="text-3 h-5 w-5 " />
                </span>
              </a>
            </div>
          </article>
        ))}
      <GetDeveloper />
    </>
  );
}

export default DeveloperData;
