"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";

import { useEffect, useState } from "react";
import axiosClient from "../../utils/api";

function AllComment({ idReq }) {
  const [comment, setComment] = useState([]);
  const [imgDevSet, setImgDevSet] = useState([]);
  const [err, setErr] = useState("");
  const callAPI = async () => {
    try {
      const res = await axiosClient.get(`/comment/req/${idReq}`);
      setComment(res.data.data);
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, [idReq]);

  return (
    <div className="relative">
      <div className="text-black z-[45678] relative text-end">
        {comment.length}Comment
      </div>
      {comment.map((r, a) => (
        <div
          key={a}
          className="w-full md:w-[95%]  border-l-4 border-b-2  p-2 bg-slate-200 relative   border-l-p border-b-p   "
        >
          <div className="before:content-[''] before:w-3 before:h-3 before:rounded-full before:absolute   before:bg-p before:top-[50%] before:left-[-0.5em]   before:text-red-500 ">
            <div className="flex justify-between  w-full">
              <div className="flex  flex-wrap items-center ">
                <CgProfile />
                <span className="flex flex-wrap ">
                  <span className="w-full">{r.developer_name}</span>
                </span>
              </div>
              <div></div>
            </div>
            <div className="bg-white p-2 rounded-md my-4">hi</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllComment;
