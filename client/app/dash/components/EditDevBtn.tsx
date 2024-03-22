import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import axiosClient from "../../utils/api";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

function EditDevBtn({ idDev }) {
  const [input, setInput] = useState({
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
  const [locationInput, setLocationInput] = useState({ location: "" });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLocation = (e) => {
    setLocationInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Updated to log current state for debugging
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const formData = new FormData();
  formData.append("image", selectedFile); // 'file' is the key expected by the server
  const handleUpload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      input.developer_img = response.data;
      const res = await axiosClient.post("/dev", {});
      console.log(res.data.data);
    } catch (error) {
      console.error(error);
      // Handle error response
      alert("Upload failed");
    }
  };

  return (
    <>
      <label className="" htmlFor={`modal-${idDev.id}`}>
        <FaEdit
          className=" absolute top-1 right-1  text-p  cursor-pointer text-lg  w-5 h-5 "
          onClick={() => {
            console.log(idDev.id);
          }}
        />
      </label>

      <input className="modal-state" id={`modal-${idDev.id}`} type="checkbox" />
      <div className="modal">
        <label className="modal-overlay"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor={`modal-${idDev.id}`}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl text-white">
            Edit Dev {idDev.developer_name}
          </h2>
          <input
            className="input-ghost-primary input"
            onChange={handleChange}
            name="developer_name"
            placeholder="developer name"
          />
          <input
            type="file"
            className="input-file"
            onChange={handleFileChange}
          />
          <span className="flex items-center">
            <input
              className="input-ghost-primary input"
              placeholder="location"
              name="location"
              value={locationInput.location} // Controlled input
              onChange={handleLocation}
            />

            <span
              className="text-sm btn btn-p"
              onClick={() => {
                setInput((prev) => ({
                  ...prev,
                  location_dev: [...prev.location_dev, locationInput.location],
                }));
                setLocationInput({ location: "" }); // Reset input correctly
              }}
            >
              Add
            </span>
          </span>
          <div className="text-md flex flex-wrap gap-2">
            {input.location_dev.map((l, a) => (
              <div key={a} className="bg-p text-white text-sm p-1 rounded-lg ">
                {l}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="btn btn-p btn-block">Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDevBtn;
