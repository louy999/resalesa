import DeveloperData from "./components/DeveloperData";

function page() {
  return (
    <div className=" w-[99vw] h-fit  relative  top-24 flex justify-center items-center ">
      <div className="mt-4 grid gap-4 container overflow-y-hidden  sm:grid-cols-2  lg:grid-cols-4 p-5 ">
        <DeveloperData />
      </div>
      {/* <div className="background_dev fixed top-0 left-0 w-[100vw] h-[100vh] bg-slate-300 -z-10"></div> */}
    </div>
  );
}

export default page;
