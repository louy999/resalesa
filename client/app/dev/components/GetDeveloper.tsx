"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { GrLike } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";

import Image from "next/image";
import LikeDev from "./likeDev";
import axiosClient from "../../utils/api";

function GetDeveloper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [auth, setAuth] = useState("");
  const [isLike, setIsLike] = useState("");
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [getDataDeveloper, setGetDataDeveloper] = useState<any>("");
  const resSearchParams = searchParams.get("id");
  const resTypeParams = searchParams.get("type");

  useEffect(() => {
    if (resSearchParams !== null) {
      setShow(true);
      const dataDeveloper = async () => {
        try {
          const res = await axiosClient.get(`dev/${resSearchParams}`);
          setGetDataDeveloper(res.data.data);
          console.log(res.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataDeveloper();
    } else {
      setShow(false);
    }
  }, [resSearchParams]);
  const formatFollowers = (count: any) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "m";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return count.toString();
    }
  };

  return (
    <div
      className={`flex ${
        show ? "top-[5em]" : "top-[1000vh]"
      } duration-300 justify-center items-center w-full md:w-[70%] h-fit left-[50%]  translate-x-[-50%] shadow-2xl rounded-md z-[345654567] fixed`}
    >
      <div className=" bg-slate-200 rounded-md w-[95vw] h-[95vh] md:w-[80vw] md:h-[80vh] relative overflow-y-scroll">
        <div className="w-full p-3 h-fit flex justify-between items-center fixed">
          <h1 className="text-2xl flex items-center gap-3 text-black">
            {getDataDeveloper.developer_name}
            <FaPeopleGroup />
            <LikeDev resSearchParams={resSearchParams} />
          </h1>
          <AiOutlineCloseCircle
            className="w-8 h-8 cursor-pointer hover:text-p hover:bg-white mr-5 text-white bg-p rounded-md duration-300"
            onClick={(e) => {
              e.preventDefault;
              router.back();
            }}
          />
        </div>
        <div className=" relative top-[5em] ">
          <div className="m-auto w-[80%]  flex items-center  justify-center">
            <Image
              className="w-[100%]  md:w-[70%] h-[50%] shadow-md  bg-cover rounded-md mb-3"
              src={getDataDeveloper.developer_img}
              alt="img"
              width={1000}
              height={500}
            />
          </div>
          <div className="w-full p-5">
            <div className="bg-white w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDeveloper;
