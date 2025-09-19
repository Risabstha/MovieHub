import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeButton = ({ value="Go to Home"}) => {

  return (
    <div className="flex justify-center">
      <Link
        to="/"
        
        className="px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-gray-300 "
      >
        {value}
      </Link>
      
    </div>
  );
};

export default HomeButton;
