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

import axiosClient from "../../utils/api";
import Image from "next/image";

function GetDeveloper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [auth, setAuth] = useState("");
  const [isLike, setIsLike] = useState("");
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [getDataDeveloper, setGetDataDeveloper] = useState("");
  const [getStarsNum, setGetStarsNum] = useState("");
  const resSearchParams = searchParams.get("id");
  const resTypeParams = searchParams.get("type");

  useEffect(() => {
    if (resSearchParams !== null) {
      setShow(true);
      const dataDeveloper = async () => {
        try {
          const res = await axiosClient.get(`/dev/${resSearchParams}`);
          setGetDataDeveloper(res.data.data);
          const StarNumDev = await axiosClient.get(
            `/starts/dev/dev/${resSearchParams}`
          );
          setGetStarsNum(StarNumDev.data.data);

          // console.log(StarNumDev.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataDeveloper();
    } else {
      setShow(false);
    }
  }, [resSearchParams]);
  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "m";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return count.toString();
    }
  };

  const dataDeveloper = async () => {
    if (getCookie("data") !== undefined) {
      try {
        await axiosClient
          .get(`/starts/dev/user/${JSON.parse(getCookie("data")).id}`)
          .then((res) => {
            console.log(res.data);

            setIsLike("res");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsLike("");
    }
  };
  useEffect(() => {
    dataDeveloper();
  }, []);
  const LikeOrNot = async () => {
    if (getCookie("data") !== undefined) {
      try {
        await axiosClient
          .post("/starts/dev", {
            devId: `${resSearchParams}`,
            userID: `${JSON.parse(getCookie("data")).id}`,
            status: `${setIsLike === "" ? true : false}`,
          })
          .then((res) => {
            dataDeveloper();
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/login");
    }
  };
  return (
    <div
      className={`flex ${
        show ? "top-[5em]" : "top-[1000vh]"
      } duration-300 justify-center items-center w-full md:w-[70%] h-fit left-[50%] translate-x-[-50%] shadow-2xl rounded-md z-[345654567] fixed`}
    >
      <div className=" bg-white rounded-md w-[95vw] h-[95vh] md:w-[80vw] md:h-[80vh] relative overflow-y-scroll">
        <div className="w-full p-3 h-fit flex justify-between items-center fixed">
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
        <div className=" relative top-[5em] ">
          <div className="m-auto w-[80%]">
            <Image
              className="w-[100%]  md:w-[100%] h-[100%] shadow-md  bg-cover rounded-md mb-3"
              src={getDataDeveloper.developer_img}
              alt="img"
              width={1000}
              height={500}
            />
          </div>
          <div className="w-full p-5">
            <div className="flex items-center capitalize">
              {getDataDeveloper.developer_name}
              {isLike === "" ? (
                <CiStar
                  onClick={() => {
                    LikeOrNot();
                  }}
                  className="h-6 w-6 ml-2 cursor-pointer"
                />
              ) : (
                <IoIosStar
                  onClick={() => {
                    LikeOrNot();
                  }}
                  className="h-6 w-6 ml-2 text-p cursor-pointer"
                />
              )}
              <p className="flex items-center  text-p opacity-80 text-md">
                {formatFollowers(getStarsNum.length)}
                <CiStar className="w-3 h-3" />
              </p>
            </div>
            <div className="bg-white w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDeveloper;
