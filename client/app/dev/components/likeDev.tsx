"use client";
import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { getCookie } from "cookies-next";
import Alert from "./alert";
import axiosClient from "../../utils/api";

function LikeDev({ resSearchParams }) {
  const [auth, setAuth] = useState("");
  const [like, setLike] = useState([]);

  useEffect(() => {
    if (getCookie("data") !== undefined) {
      setAuth(JSON.parse(getCookie("data")).id);
    }
    getLikeDev();
  }, [resSearchParams]);

  const addLike = async (user_id) => {
    if (getCookie("data") !== undefined) {
      try {
        const res = await axiosClient.post("/starts/dev", {
          developer_id: resSearchParams,
          user_id: user_id,
          status: true,
        });
        console.log(res.data);
        const get = await axiosClient.get(`/starts/dev/dev/${resSearchParams}`);
        setLike(get.data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      window.location.pathname = "/login";
    }
  };
  const getLikeDev = async () => {
    try {
      const res = await axiosClient.get(`/starts/dev/dev/${resSearchParams}`);
      setLike(res.data.data);
      console.log(resSearchParams);
    } catch (error) {
      console.log(error);
    }
  };
  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "m";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return count.toString();
    }
  };

  return (
    <>
      <span
        onClick={() => {
          addLike(auth);
        }}
        className="cursor-pointer"
      >
        <span className="flex justify-start items-center ">
          <span className="text-black">{formatFollowers(like.length)}</span>
          <FcLike />
        </span>
      </span>
    </>
  );
}

export default LikeDev;
