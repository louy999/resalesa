"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FaPeopleGroup } from "react-icons/fa6";

import axiosClient from "../../utils/api";
import Image from "next/image";

function GetDeveloper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);
  const [getDataDeveloper, setGetDataDeveloper] = useState("");
  const resSearchParams = searchParams.get("id");
  const resTypeParams = searchParams.get("type");

  useEffect(() => {
    if (resSearchParams !== null) {
      setShow(true);
      const dataDeveloper = async () => {
        try {
          const res = await axiosClient.get(`/dev/${resSearchParams}`);
          console.log(res.data.data);
          setGetDataDeveloper(res.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataDeveloper();
    } else {
      setShow(false);
    }
  }, [resSearchParams]);
  return (
    <div
      className={`flex ${
        show ? "top-[5em]" : "top-[1000vh]"
      } duration-300 justify-center items-center w-full md:w-[70%] h-fit left-[50%] translate-x-[-50%] shadow-2xl rounded-md z-[345654567] fixed`}
    >
      <div className=" bg-white rounded-md w-[95vw] h-[95vh] md:w-[80vw] md:h-[80vh]">
        <div className="w-full p-3 h-fit flex justify-between items-center ">
          <h1 className="text-2xl flex items-center gap-3">
            {getDataDeveloper.developer_name}
            <FaPeopleGroup />
          </h1>
          <AiOutlineCloseCircle
            className="w-8 h-8 cursor-pointer hover:text-p duration-300"
            onClick={(e) => {
              e.preventDefault;
              router.back();
            }}
          />
        </div>
        <div className="overflow-y-scroll relative">
          <div className="fixed top-10  w-[80%] h-[50%] left-2/4 translate-x-[-50%]">
            <Image
              className="w-[100%]  md:w-[100%] h-[100%] bg-cover rounded-md mb-3"
              src={getDataDeveloper.developer_img}
              alt="img"
              width={1000}
              height={1000}
            />
          </div>
          <div className=" relative top-[40vh] w-full  h-[100vh]">
            <div className="bg-transparent backdrop-blur-lg text-p lg:backdrop-blur-md md:backdrop-blur-md ">
              {getDataDeveloper.developer_name}
            </div>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDeveloper;
