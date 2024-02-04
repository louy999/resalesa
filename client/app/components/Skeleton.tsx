import React from "react";

function Skeleton() {
  return (
    <div className="flex flex-wrap overflow-x-hidden gap-4 w-[70vw] ">
      <div className="w-[150px] h-[150px] bg-slate-300 animate-pulse"></div>
      <div className="w-[150px] h-[150px] bg-slate-300 animate-pulse"></div>
      <div className="w-[150px] h-[150px] bg-slate-300 animate-pulse"></div>
      <div className="w-[150px] h-[150px] bg-slate-300 animate-pulse"></div>
      <div className="w-[150px] h-[150px] bg-slate-300 animate-pulse"></div>
      <div className="w-[150px] h-[150px] bg-slate-300 animate-pulse"></div>
    </div>
  );
}

export default Skeleton;
