"use client";
import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import axiosClient from "../utils/api";
import { getCookie } from "cookies-next";

function Like({ offerID }) {
  const [auth, setAuth] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLike = async (userID, offerID) => {
      try {
        const res = await axiosClient.get(`/starts/offer/user/${userID}`);
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const updateStatus = async (userID) => {
      try {
        const res = await axiosClient.get(
          `/starts/offer/oau/${offerID}/${userID}`
        );
        const update = await axiosClient.patch(`/starts/offer`, {
          id: res.data.data.id,
          status: res.data.data.status ? false : true,
        });
        console.log(update.data);

        getLike();
      } catch (error) {
        console.log(error);
      }
    };
    if (getCookie("data") !== undefined) {
      setAuth(JSON.parse(getCookie("data")).id);
      if (auth !== "") {
        getLike(auth);
      }
    }
  }, [auth]);
  return (
    <span
      onClick={() => {
        updateStatus(auth);
      }}
      className="absolute w-5 h-5 text-[2em] hover:opacity-65 duration-300 right-[0.5em] top-[0.5em]"
    >
      {data.map((l, a) =>
        l.offer_id === offerID ? (
          l.status ? (
            <FcLike key={a} />
          ) : (
            <FcLikePlaceholder key={a} />
          )
        ) : (
          <FcLikePlaceholder key={a} />
        )
      )}
    </span>
  );
}

export default Like;
