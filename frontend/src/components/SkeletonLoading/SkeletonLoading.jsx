import React from "react";
import { useTheme } from "../../stores/ThemeProvider";

const SkeletonCard = () => {

  const {theme} = useTheme();

  return (
    <div className={`animate-pulse grid grid-rows-[1fr_auto] h-[320px] w-[180px]  rounded-md
     ${theme === "dark" ? "bg-[#323232]" : "bg-gray-200"}`}>
      {/* Poster */}
      <div className="w-full h-full "></div>

      {/* Info */}
      <div className="p-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

const SkeletonLoading = () => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
      {/* Array.from({ length: 18 }) is a JavaScript trick to create an array of a specific length */}
      {Array.from({ length: 18 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonLoading;
