import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Card from "../card";
const DisplayCards = () => {
  return (
    <div className="my-6  rounded-[5%] lg:flex-1 w-[100%] min-h-screen bg-custom-color-5">
      <div className="flex flex-rows ">
        <div className="text-gray-400 mx-[5%] mt-5 w-screen">
          <p>Filter:</p>
          <div className="flex flex-row items-center">
            <p className="text-white text-[14px]">Criteria name</p>
            <AiFillCaretDown className="text-white mt-1 ml-2" />
          </div>
        </div>
        <div className="text-gray-400 mx-[5%] mt-5 justify-between ">
          <p className="ml-[45%]">Sort By:</p>
          <div className="flex flex-row items-center w-32">
            <p className=" text-white text-[14px]">Last Messages</p>
            <AiFillCaretDown className="text-white mt-1 ml-2" />
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3">
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default DisplayCards;
