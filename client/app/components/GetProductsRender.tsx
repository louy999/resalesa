"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";

import axiosClient from "../utils/api";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RecommendProducts from "./RecommendProducts";

function GetProductsRender() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [cashBack, setCashBack] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [clientName, setClientName] = useState("");
  const [numberImg, setNumberImg] = useState(0);
  const resSearchParams = searchParams.get("id");
  const resTypeParams = searchParams.get("type");

  const ProApi = async (id) => {
    try {
      const res = await axiosClient.get(`/offer/dev/${id}`);
      setRecommend(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getDataProductsApi = async () => {
    try {
      const res = await axiosClient.get(`/offer/${resSearchParams}`);
      setDataProduct(res.data.data);
      ProApi(res.data.data.developer_id);
      if (res.data.data !== undefined) {
        const view = await axiosClient.post(`/views`, {
          offer_id: resSearchParams,
          client_id: clientName,
        });
      } else {
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      setShow(false);
    }
  };

  useEffect(() => {
    if (resSearchParams !== null) {
      setShow(true);
      if (getCookie("data") !== undefined) {
        setClientName(JSON.parse(getCookie("data")).id);
      } else {
        setClientName("");
      }

      const cashbackApi = async () => {
        try {
          const res = await axiosClient.get("/cash");
          setCashBack(res.data.data[0].per);
        } catch (err) {
          console.log(err);
        }
      };

      getDataProductsApi();
      cashbackApi();
    } else {
      setShow(false);
    }
  }, [resSearchParams]);
  return (
    <div
      className={`flex ${
        show ? "top-[5vh]" : "top-[1000vh]"
      } duration-300 justify-center items-center w-full h-[100vh] fixed   z-[345654567]   bg-transparent backdrop-blur-[200px] `}
    >
      <div className=" bg-white rounded-md w-[95vw] lg:w-[80vw] h-[90vh] md:w-[80vw] md:h-[80vh]  shadow-md ">
        <div className="w-full p-3 h-fit flex justify-between items-center">
          <h1 className="text-2xl flex gap-2 items-center capitalize">
            {dataProduct.title}
            <FaHome />
          </h1>
          <AiOutlineCloseCircle
            className="w-8 h-8 cursor-pointer hover:text-p duration-300"
            onClick={(e) => {
              e.preventDefault;
              router.back();
            }}
          />
        </div>
        <div className=" h-[70vh] overflow-y-scroll ">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="img p-2 w-[100%] md:w-[fit-content] ">
              {dataProduct.img && dataProduct.img.length > 0 && (
                <Image
                  className="w-[100%]  md:w-[90%] h-[60%] rounded-md mb-3"
                  src={dataProduct.img[numberImg]}
                  alt="img"
                  width={1000}
                  height={1000}
                />
              )}
              <div className="flex items-start w-[100%] md:w-[90%] flex-wrap gap-2">
                {dataProduct &&
                  dataProduct.img &&
                  dataProduct.img.map((i, a) => (
                    <Image
                      onClick={() => {
                        setNumberImg(a);
                      }}
                      key={a}
                      src={i}
                      alt="img"
                      width={1000}
                      height={1000}
                      className={`w-[20%] h-[7%] cursor-pointer rounded-md `}
                    />
                  ))}
              </div>
            </div>
            <div className="flex flex-wrap w-full h-fit capitalize">
              <span className="w-full mb-3 flex gap-2 items-center">
                area: {dataProduct.area}
                <TbRulerMeasure />
              </span>
              <span>
                price:{" "}
                {dataProduct?.price
                  ? dataProduct.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : "N/A"}{" "}
                EGP
              </span>
              <span className="w-full mb-3">
                {
                  <p>
                    cash back:{"  "}
                    {(
                      (((dataProduct.commission * dataProduct.price) / 100 -
                        (((dataProduct.commission * dataProduct.price) / 100) *
                          14) /
                          100) *
                        cashBack) /
                      100
                    )
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    EGP within {dataProduct.check_c}
                  </p>
                }
              </span>
              <span className="w-full mb-3 ">
                delivery: {dataProduct.delivery} M
              </span>
              <span className="w-full mb-3">
                description: {dataProduct.description}
              </span>
              <span className="w-full mb-3">
                developer_name: {dataProduct.developer_name}
              </span>
              <span className="w-full mb-3">
                down_payment: {dataProduct.down_payment}
              </span>
              <span className="w-full mb-3">years: {dataProduct.years}</span>
              <span className="w-full mb-3">
                location: {dataProduct.location}
              </span>
              <div className=" w-full flex items-center justify-start gap-5 pt-3 ">
                <a
                  className="group relative inline-block focus:outline-none focus:ring w-23 h-23 "
                  href="/"
                >
                  <span className="absolute inset-0 translate-x-1 translate-y-1 bg-green-400 rounded-full  transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                  <span className="flex relative items-center  justify-between rounded-full border-2 border-green-600  border-current px-4 py-1 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    <FaWhatsapp className="text-3 h-5 w-5 " />
                  </span>
                </a>
                <a
                  className="group relative inline-block focus:outline-none focus:ring w-23 h-23 "
                  href="/"
                >
                  <span className="absolute inset-0 translate-x-1  translate-y-1 bg-p rounded-full  transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                  <span className="flex relative items-center  justify-between rounded-full border-2 border-rose-700  border-current px-4 py-1 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    <MdAddCall className="text-3 h-5 w-5 " />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <RecommendProducts data={recommend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetProductsRender;
