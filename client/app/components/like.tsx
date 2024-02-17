"use client";
import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import axiosClient from "../utils/api";
import { getCookie } from "cookies-next";
import Alert from "./alert";

function Like({ offerID }) {
  const [auth, setAuth] = useState("");
  const [data, setData] = useState([]);
  const postLike = async (userID) => {
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
  const updateStatus = async (userID) => {
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
    if (getCookie("data") !== undefined) {
      setAuth(JSON.parse(getCookie("data")).id);
      if (auth !== "") {
        getLike(auth);
      }
    }
  }, [auth]);
  const getLike = async (userID, offerID) => {
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
          data.map((l, a) =>
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
