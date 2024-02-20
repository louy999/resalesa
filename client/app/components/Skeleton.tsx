import React from "react";

function Skeleton() {
  return (
    <div className="flex  overflow-x-hidden gap-4 w-[70vw] ">
      <div className="skeleton w-80 h-80 rounded-md"></div>
      <div className="skeleton w-80 h-80 rounded-md"></div>
      <div className="skeleton w-80 h-80 rounded-md"></div>
      <div className="skeleton w-80 h-80 rounded-md"></div>
      <div className="skeleton w-80 h-80 rounded-md"></div>
    </div>
  );
}

export default Skeleton;
