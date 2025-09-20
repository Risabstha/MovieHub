import React from "react";

const SkeletonLoading = () => {
  return (
    <div>
      <div className="animate-pulse grid grid-rows-[1fr_auto] h-[320px] w-[180px] bg-gray-200 rounded-md">
        {/* Poster */}
        <div className="w-full h-full bg-gray-300"></div>

        {/* Info */}
        <div className="p-2">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
