import React from "react";
import CircularIndeterminate from "@/components/loading";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-96">
      <CircularIndeterminate />
    </div>
  );
};

export default Loading;
