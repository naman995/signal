import React from "react";

const Text = ({ name, text ,time}) => {
  return (
    <>
      <div className="bg-custom-color-9 w-[90%] lg:w-84 max-w-lg h-auto py-2 pl-2 ml-5 rounded-3xl mt-5">
        <div className="text-custom-color-1 ml-4 text-xl font-semibold mt-0">
          {name}
        </div>
        <div className="text-white pl-4">{text}</div>
        <div className="text-custom-color-10 mt-4 pl-4 text-[15px]">{time}</div>
      </div>
    </>
  );
};

export default Text;
