"use client";
import React from "react";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/api";
import { CgProfile } from "react-icons/cg";
import BarType from "../../components/BarType";
import RenderBarType from "../../components/RenderBarType";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import AllComment from "./AllComment";
import { getCookie } from "cookies-next";

function AllRequest() {
  const searchParams = useSearchParams();
  const resSearchParams = searchParams.get("type");

  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await axiosClient.get("/req");
        setData(res.data.data);
      } catch (err) {
        setErr(err);
      }
    };

    callAPI();
  }, []);
  return (
    <div className=" relative top-[100px] left-[50%] translate-x-[-50%] h-fit w-[80%]  border  rounded-md p-2 shadow-lg bg-stone-100">
      <RenderBarType colorBar={"black"} />
      <div className="border-l-4  border-l-p">
        {data
          // ?.sort((a, b) => new Date(b.date) - new Date(a.date))
          .filter((item) => item.type === resSearchParams)
          .map((r, a) => (
            <div
              className="w-full md:w-[95%] hover:p-4 hover:left-5 duration-300 rounded-r-md border-l-4  p-2 shadow-lg bg-slate-200 text-black relative my-5"
              key={a}
            >
              <div className="before:content-[''] before:w-5 before:h-5 before:rounded-full before:absolute   before:bg-p before:top-[50%] before:left-[-1em]   before:text-red-500">
                <div className="flex justify-between  w-full">
                  <div className="flex  gap-3 flex-wrap items-center ">
                    <CgProfile className="w-6 h-6" />
                    <div className=" flex flex-wrap ">
                      <div className="w-full text-xl">{r.client_name}</div>
                      <div className="text-p ">{r.type}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded-md my-4">{r.req}</div>
              </div>
              <div>
                <AllComment idReq={r.id} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllRequest;
