import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
const DisplayCards = () => {
  return (
    <div className="m-6 rounded-[5%] h-screen w-auto bg-custom-color-5">
      <div className="flex flex-rows ">
        <div className="text-gray-400 mx-[5%] mt-5 w-screen">
          <p>Filter:</p>
          <div className="flex flex-row items-center">
            <p className="text-white">Criteria name</p>
            <AiFillCaretDown className="text-white mt-1 ml-2" />
          </div>
        </div>
        <div className="text-gray-400 mx-[5%] mt-5 justify-between pr-[5%]">
          <p className="ml-[53%]">Sort By:</p>
          <div className="flex flex-row items-center w-32">
            <p className=" text-white ">Last Messages</p>
            <AiFillCaretDown className="text-white mt-1 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
