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
import GetProductsRender from "./GetProductsRender";
import Like from "./like";
import Skeleton from "./Skeleton";

function AllProducts() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resSearchParams = searchParams.get("type");
  if (resSearchParams === null) {
    router.push("?type=app");
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
        <div className="mx-auto relative cursor-pointer text-white  w-full   max-w-screen-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="">
            <h2 className="text-xl font-bold text-white sm:text-3xl">
              Product Collection
            </h2>
          </header>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            <div className=" md:hover:m-[-10px] duration-300 py-2 relative">
              <span className="absolute top-3 left-1 bg-white text-p p-1 rounded-lg">
                NEW
              </span>
              <span className="absolute z-5678 p-5 w-5 h-5 text-[2em] hover:opacity-65 duration-300 right-5 top-0">
                {/* <Like offerID={pro.id} /> */}
              </span>
              <div
                className=""
                onClick={(e) => {
                  e.preventDefault;
                  router.push(`?type=${resSearchParams}&id=234567`);
                }}
              >
                <div>
                  <Image
                    src={
                      "https://plus.unsplash.com/premium_photo-1705091306854-9085d0074911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    className="rounded-t-lg w-fit bg-cover"
                    alt="img"
                    width={450}
                    height={450}
                  />
                </div>

                <div className="relative bg-white  text-black pt-3 capitalize p-2 rounded-md ">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    villa town house
                  </h3>
                  <p className="flex items-center ">
                    area: 80 <TbRulerMeasure />
                  </p>
                  <p>down payment:800,000 EGP</p>
                  <p>price: 8,000,000 EGP</p>
                  {/* <p>type: {pro.type_sale}</p> */}
                  <p>installment: 10y</p>
                  <p>delivery: 30 Month</p>
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
                  <p className="">developer: LMD</p>
                  <p className="bg-gray-200 text-p w-fit px-2 py-1 rounded-md">
                    New Cairo
                  </p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AllProducts;

// {
//   getData ? (
//     <>
//       <Skeleton />
//       <Skeleton />
//       <Skeleton />
//       <Skeleton />
//     </>
//   ) : data?.length ? (
//     data
//       ?.sort(
//         (a: any, b: any): number =>
//           new Date(b.date).getTime() - new Date(a.date).getTime()
//       )
//       .filter((pro: any): boolean => pro.status === true)
//       .filter((item: any): any => item.type_estate === resSearchParams)
//       .map((pro: any, index: any): any => (
//         <div
//           key={index}
//           className=" md:hover:m-[-10px] duration-300 py-2 relative"
//         >
//           {Date.now() - new Date(pro.date).getTime() <
//           3 * 24 * 60 * 60 * 1000 ? (
//             <span className="absolute top-3 left-1 bg-white text-p p-1 rounded-lg">
//               NEW
//             </span>
//           ) : (
//             ""
//           )}
//           <span className="absolute z-5678 p-5 w-5 h-5 text-[2em] hover:opacity-65 duration-300 right-5 top-0">
//             <Like offerID={pro.id} />
//           </span>
//           <div
//             className=""
//             onClick={(e) => {
//               e.preventDefault;
//               router.push(`?type=${resSearchParams}&id=${pro.id}`);
//             }}
//           >
//             <div>
//               <Image
//                 src={pro.img[0]}
//                 className="rounded-t-lg w-fit bg-cover"
//                 alt="img"
//                 width={450}
//                 height={450}
//               />
//             </div>

//             <div className="relative bg-white  text-black pt-3 capitalize p-2 rounded-md ">
//               <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
//                 {pro.title}
//               </h3>
//               <p className="flex items-center ">
//                 area: {pro.area} <TbRulerMeasure />
//               </p>
//               <p>
//                 down payment: {(pro.down_payment * pro.price) / 100}
//                 EGP
//               </p>
//               <p>
//                 price:{" "}
//                 {pro.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//                 EGP
//               </p>
//               {/* <p>type: {pro.type_sale}</p> */}
//               <p>installment: {pro.years}y</p>
//               <p>delivery: {pro.delivery} Month</p>
//               {/* <p>
//                         cash back:
//                         <span className="text-p mx-1">
//                           {(
//                             (((pro.commission * pro.price) / 100 -
//                               (((pro.commission * pro.price) / 100) * 14) /
//                                 100) *
//                               cashBack) /
//                             100
//                           )
//                             .toString()
//                             .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//                           EGP
//                         </span>
//                         within {pro.check_c}
//                       </p> */}
//               <p></p>
//               <p className="">developer: {pro.developer_name}</p>
//               <p className="bg-gray-200 text-p w-fit px-2 py-1 rounded-md">
//                 {pro.location}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))
//   ) : (
//     <div>no products</div>
//   );
// }
