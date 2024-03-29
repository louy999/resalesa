import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import axiosClient from "../../utils/api";
import axios from "axios";

function AddDevBtn() {
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
      const res = await axiosClient.post("/dev", input).then((res) => {
        window.location.reload();
      });
      console.log(res.data.data);
    } catch (error) {
      console.error(error);
      // Handle error response
      alert("Upload failed");
    }
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
            <button className="btn btn-p btn-block" onClick={handleUpload}>
              Add Developer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDevBtn;
