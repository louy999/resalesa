import React from "react";

function Skeleton() {
  return (
    <div className="flex  overflow-x-hidden gap-4 w-full ">
      <div className="skeleton w-full h-80  rounded-md"></div>
    </div>
  );
}

export default Skeleton;
