import Image from "next/image";
import Banner from "./components/Banner";
import RenderBarType from "./components/RenderBarType";
import AllProducts from "./components/AllProducts";
import GetProductsRender from "./components/GetProductsRender";

export default function Home() {
  return (
    <>
      <div className=" relative">
        <Banner />
        <div className=" z-[156789] bg-transparent backdrop-blur-lg lg:backdrop-blur-md md:backdrop-blur-md relative top-[40vh] md:top-[70vh] mb-[40vh] md:mb-[70vh]">
          <RenderBarType colorBar={"white"} />
          <AllProducts />
        </div>
      </div>
      <GetProductsRender />
    </>
  );
}
