import React from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddUsersBtn() {
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
          <h2 className="text-xl">Add User</h2>
          <span></span>
          <div className="flex gap-3">
            <button className="btn btn-error btn-block">Delete</button>

            <button className="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUsersBtn;
