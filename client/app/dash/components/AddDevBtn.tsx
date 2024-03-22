import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import axiosClient from "../../utils/api";

function AddDevBtn() {
  const addDeveloper = async () => {
    const res = await axiosClient.post("/dev", {
      status: true,
      sales_name: "",
      developer_name: "",
      developer_img: "",
      phone: "",
      business: "",
      com_company: "",
      com_sales: "",
      email: "",
      password: "",
      location_dev: [],
    });
  };
  return (
    <>
      <label className="btn btn-p" htmlFor="modal-1">
        <IoMdAddCircle />
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Add developer</h2>
          <input
            class="input-ghost-primary input"
            placeholder="developer name"
          />
          <input type="file" className="input-file" />
          <input class="input-ghost-primary input" placeholder="location" />

          <div className="flex gap-3">
            <button className="btn btn-p btn-block">Add</button>

            <button className="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDevBtn;
