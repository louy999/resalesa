"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";

import { useEffect, useState } from "react";
import axiosClient from "../../utils/api";

function AllComment({ idReq }) {
  const [comment, setComment] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await axiosClient.get(`/comment/req/${idReq}`);
        // setComment(res.comment.comment);
      } catch (err) {
        setErr(err);
      }
    };
    callAPI();
  }, []);
  return (
    <div className="relative">
      <div className="w-full md:w-[95%]  border-l-4 border-b-2  p-2 bg-slate-200 relative   border-l-p border-b-p   ">
        <div className="before:content-[''] before:w-3 before:h-3 before:rounded-full before:absolute   before:bg-p before:top-[50%] before:left-[-0.5em]   before:text-red-500 ">
          <div className="flex justify-between  w-full">
            <div className="flex  flex-wrap items-center ">
              <CgProfile />

              <span className="w-5 flex flex-wrap ">
                <span className="w-full">client</span>
                <span>date</span>
              </span>
              <div>type</div>
            </div>
            <div>
              <div>Liked (99)</div>
              <span>comment (99)</span>
            </div>
          </div>
          <div className="border-b-black border-b-2 mb-2">hi</div>
        </div>
      </div>
    </div>
  );
}

export default AllComment;
