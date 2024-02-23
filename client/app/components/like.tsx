"use client";
import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import axiosClient from "../utils/api";
import { getCookie } from "cookies-next";
import Alert from "./alert";

function Like({ offerID }: any) {
  const [auth, setAuth] = useState("");
  const [data, setData] = useState([]);
  const postLike = async (userID: any) => {
    try {
      const postLikeApi = await axiosClient.post(`/starts/offer`, {
        user_id: userID,
        offer_id: offerID,
        status: true,
      });
      getLike(auth);
    } catch (error) {
      console.log(error);
    }
  };
  const updateStatus = async (userID: any) => {
    if (getCookie("data") !== undefined) {
      try {
        const res = await axiosClient.get(
          `/starts/offer/oau/${offerID}/${userID}`
        );
        const update = await axiosClient.patch(`/starts/offer`, {
          id: res.data.data.id,
          status: res.data.data.status ? false : true,
        });
        getLike(auth);
      } catch (error) {
        postLike(userID);
      }
    } else {
      window.location.pathname = "/login";
    }
  };
  useEffect(() => {
    const cookieData = getCookie("data");

    if (cookieData !== undefined) {
      setAuth(JSON.parse(cookieData).id);
      if (auth !== "") {
        getLike(auth);
      }
    }
  }, [auth]);
  const getLike = async (userID: any) => {
    try {
      const res = await axiosClient.get(`/starts/offer/user/${userID}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <span
        onClick={() => {
          updateStatus(auth);
        }}
        className="cursor-pointer"
      >
        {/* loading ? ( "" ) : */}
        {data.length === 0 ? (
          <FcLikePlaceholder />
        ) : (
          data.map((l: any, a: any): any =>
            l.offer_id === offerID ? (
              l.status ? (
                <FcLike key={a} />
              ) : (
                <FcLikePlaceholder key={a} />
              )
            ) : (
              ""
            )
          )
        )}
      </span>
    </>
  );
}

export default Like;
