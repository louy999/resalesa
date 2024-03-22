"use client";
import React, { useState, useEffect } from "react";

import axiosClient from "../../utils/api";
import AddUsersBtn from "../components/AddUsersBtn";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsersAPi = async () => {
      try {
        const res = await axiosClient.get("/users");
        setData(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsersAPi();
  }, []);

  return (
    <div className="absolute top-24 left-[50%] translate-x-[-50%] mt-4 z-[23456789">
      <h1 className="text-5xl flex justify-between text-p m-4">
        <span>Users</span>
        {/* <AddUsersBtn /> */}
      </h1>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 flex-wrap">
        {data.map((u, a) => (
          <div className="card" key={a}>
            <div className="card-body w-fit">
              <h2 className="card-header">Name: {u.name}</h2>
              <p className="text-content2 w-fit">Email: {u.email}</p>
              <p className="text-content2 w-fit">Phone: {u.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
