import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Card from "../card";

const DisplayCards = () => {
  return (
    <div className="bg-custom-color-5 lg:w-[98%] py-8 rounded-3xl lg:h-full">
      <div className="flex flex-row justify-between px-8">
        <div className="flex flex-col">
          <span className="text-[#C0C0C0]">Filter :</span>
          <div className="flex flex-row items-center">
            <span className="text-sm text-white">Criteria Name</span>
            <AiFillCaretDown className="text-sm text-white mt-0.5 mx-0.5" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[#C0C0C0]">Sort By :</span>
          <div className="flex flex-row items-center">
            <span className="text-sm text-white">Last Messages</span>
            <AiFillCaretDown className="text-sm text-white mt-0.5 mx-0.5" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-8 px-8 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default DisplayCards;
