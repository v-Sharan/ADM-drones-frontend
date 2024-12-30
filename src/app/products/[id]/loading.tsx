"use client";

import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-w-full min-h-screen ">
      <CircularProgress
        aria-label="Loading..."
        size="lg"
        classNames={{
          svg: "w-36 h-36 drop-shadow-md",
          indicator: "stroke-primary",
          track: "stroke-black/10",
        }}
      />
    </div>
  );
};

export default Loading;
