import React from "react";

const ProgressBar2 = ({ progress }) => {
  return (
    <div className="bg-custom-color-8 h-3 rounded-full relative w-auto ">
      <div
        className="bg-custom-color-1 h-full rounded-full absolute left-0 top-0"
        style={{ width: `${progress}%` }}
      ></div>
       

      <p className=" absolute right-0 text-[12px] pt-5 text-custom-color-1">
        Step 2 / Step 2
      </p>
      
    </div>
  );
};

export default ProgressBar2;
