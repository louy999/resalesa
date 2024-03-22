"use client";
import React, { useState } from "react";
import { getCookie } from "cookies-next";
import axiosClient from "../../utils/api";
import data from "../../lib/data";

function AddComment() {
  const [input, setInput] = useState({
    req: "",
    type: "app-villa",
  });
  const [err, setErr] = useState("");
  const handelChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addComment = async (e: any) => {
    e.preventDefault();
    const cookieData = getCookie("data");
    if (cookieData !== undefined) {
      setErr("loading");

      try {
        const res = await axiosClient.post("/req", {
          client_id: JSON.parse(cookieData)?.id,
          type: input.type,
          req: input.req,
          client_name: JSON.parse(cookieData)?.name,
        });
        setTimeout(() => {
          window.location.reload();
        }, 10000);
        setErr("Done");
      } catch (error: any) {
        console.log(error);
      } finally {
        setErr("done");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      window.location.pathname = "/login";
    }
  };

  return (
    <>
      <div className="fixed bottom-5 left-5">
        <label className="btn bg-p" htmlFor="modal-3">
          Add Comment
        </label>
        <input className="modal-state" id="modal-3" type="checkbox" />
        <div className="modal">
          <label className="modal-overlay"></label>
          <div className="modal-content flex flex-col gap-5">
            <label
              htmlFor="modal-3"
              className="btn btn-sm btn-circle bg-p text-white absolute right-2 top-2"
            >
              ✕
            </label>
            <h2 className="text-xl">22Deal</h2>
            <span className="">
              <input
                className="input bg-p  text-white"
                placeholder="Write Your Request"
                name="req"
                onChange={handelChange}
                value={input.req}
              />
              <select
                className="select select-warning mt-2"
                onChange={handelChange}
                name="type"
                value={input.type}
              >
                <option>type</option>
                {data?.dataType.map((o: any, a: any): any => (
                  <option value={o.href.slice(6)} key={a}>
                    {o.name}
                  </option>
                ))}
              </select>
            </span>
            <div className="flex gap-3">
              {err === "" ? (
                <button
                  className={`btn pg-p btn-block capitalize disabled:opacity-75 `}
                  onClick={addComment}
                >
                  add comment
                </button>
              ) : err === "done" ? (
                <button
                  className={`btn pg-p btn-block capitalize disabled:opacity-75 `}
                >
                  done
                </button>
              ) : (
                <button
                  className={`btn pg-p btn-block capitalize disabled:opacity-75 `}
                >
                  <svg
                    className="spinner-ring spinner-error"
                    viewBox="25 25 50 50"
                    strokeWidth="5"
                  >
                    <circle cx="50" cy="50" r="20" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddComment;
