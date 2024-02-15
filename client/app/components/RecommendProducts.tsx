"use client";
import React, { useState, useEffect } from "react";
import axiosClient from "../utils/api";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { TbRulerMeasure } from "react-icons/tb";

function RecommendProducts({ data }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resSearchParams = searchParams.get("type");
  const [cashBack, setCashBack] = useState([]);

  useEffect(() => {
    const cashbackApi = async () => {
      try {
        const res = await axiosClient.get("/cash");
        setCashBack(res.data.data[0].per);
      } catch (err) {
        console.log(err);
      }
    };
    cashbackApi();
  }, []);
  return (
    <div>
      <h1>recommend</h1>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {data
          ?.sort((a, b) => new Date(b.date) - new Date(a.date))
          .filter((pro) => pro.status === true)
          .filter((item) => item.type_estate === resSearchParams)
          .map((pro, index) => (
            <div
              key={index}
              className="shadow-lg md:hover:m-[-10px] duration-300  py-2 rounded-b-md"
              onClick={(e) => {
                e.preventDefault;
                router.push(`?type=${resSearchParams}&id=${pro.id}`);
              }}
            >
              <div className="">
                <div>
                  <Image
                    src={pro.img[0]}
                    className="rounded-t-lg w-fit bg-cover"
                    alt="img"
                    width={450}
                    height={450}
                  />
                </div>

                <div className="relative bg-white  text-black pt-3 capitalize p-2 ">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {pro.title}
                  </h3>
                  <p className="flex items-center ">
                    area: {pro.area} <TbRulerMeasure />
                  </p>
                  <p>down payment: {pro.down_payment}%</p>
                  <p>
                    price:{" "}
                    {pro.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    EGP
                  </p>
                  <p>type: {pro.type_sale}</p>
                  <p>installment: {pro.years}y</p>
                  <p>
                    cash back:
                    <span className="text-p mx-1">
                      {(
                        (((pro.commission * pro.price) / 100 -
                          (((pro.commission * pro.price) / 100) * 14) / 100) *
                          cashBack) /
                        100
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      EGP
                    </span>
                    within {pro.check_c}
                  </p>
                  <p></p>
                  <p className="">{pro.developer_name}</p>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default RecommendProducts;
