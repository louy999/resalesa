"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { TbRulerMeasure } from "react-icons/tb";
import { FcLikePlaceholder } from "react-icons/fc";

import axios from "axios";
import axiosClient from "../utils/api";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "./Skeleton";
import GetProductsRender from "./GetProductsRender";
import Like from "./like";

function AllProducts() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resSearchParams = searchParams.get("type");
  if (resSearchParams === null) {
    router.push("?type=app-villa");
  } else {
  }
  const [data, setData] = useState([]);
  const [cashBack, setCashBack] = useState([]);
  const [getData, setGetData] = useState(true);
  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await axiosClient.get("/offer");
        setData(res.data.data);

        setGetData(false);
      } catch (err) {
        console.log(err);
      }
    };

    const cashbackApi = async () => {
      try {
        const res = await axiosClient.get("/cash");
        setCashBack(res.data.data[0].per);
      } catch (err) {
        console.log(err);
      }
    };
    // cashbackApi();
    callAPI();
  }, []);
  return (
    <>
      <section className="">
        <div className="mx-auto relative cursor-pointer text-white     max-w-screen-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="">
            <h2 className="text-xl font-bold text-white sm:text-3xl">
              Product Collection
            </h2>
          </header>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {getData ? (
              <Skeleton />
            ) : data?.length ? (
              data
                ?.sort((a, b) => new Date(b.date) - new Date(a.date))
                .filter((pro) => pro.status === true)
                .filter((item) => item.type_estate === resSearchParams)
                .map((pro, index) => (
                  <div
                    key={index}
                    className=" md:hover:m-[-10px] duration-300 py-2 relative"
                  >
                    <Like offerID={pro.id} />
                    <div
                      className=""
                      onClick={(e) => {
                        e.preventDefault;
                        router.push(`?type=${resSearchParams}&id=${pro.id}`);
                      }}
                    >
                      <div>
                        <Image
                          src={pro.img[0]}
                          className="rounded-t-lg w-fit bg-cover"
                          alt="img"
                          width={450}
                          height={450}
                        />
                      </div>

                      <div className="relative bg-white  text-black pt-3 capitalize p-2 rounded-md ">
                        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {pro.title}
                        </h3>
                        <p className="flex items-center ">
                          area: {pro.area} <TbRulerMeasure />
                        </p>
                        <p>down payment: {pro.down_payment}%</p>
                        <p>
                          price:{" "}
                          {pro.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          EGP
                        </p>
                        <p>type: {pro.type_sale}</p>
                        <p>installment: {pro.years}y</p>
                        {/* <p>
                          cash back:
                          <span className="text-p mx-1">
                            {(
                              (((pro.commission * pro.price) / 100 -
                                (((pro.commission * pro.price) / 100) * 14) /
                                  100) *
                                cashBack) /
                              100
                            )
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            EGP
                          </span>
                          within {pro.check_c}
                        </p> */}
                        <p></p>
                        <p className="">{pro.developer_name}</p>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <div>no products</div>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}

export default AllProducts;
