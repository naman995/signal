import React from "react";
import BoxImage from "../../assets/img/box_img.png";
import { Link } from "react-router-dom";

import { HiOutlineClock } from "react-icons/hi";
import { AiTwotoneStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="bg-custom-color-4 lg:w-84 w-full h-56 rounded-3xl">
      <div className="flex flex-rows">
        <div className="m-5">
          <img className="h-20 " src={BoxImage} alt="" />
        </div>
        <div className="text-white mt-5 ">
          <p className="text-xl">Pseudo Name</p>
          <p className="text-base">12 Members</p>
          <div className="flex flex-row items-center">
            <AiTwotoneStar className="text-yellow-400 mt-1/2 mr-1" />
            <AiTwotoneStar className="text-yellow-400 mt-1/2 mr-1" />
            <AiTwotoneStar className="text-yellow-400 mt-1/2 mr-1" />
            <AiTwotoneStar className="text-custom-color-8 mt-1/2 mr-1" />
            <AiTwotoneStar className="text-custom-color-8 mt-1/2 mr-1" />
            <p className="">(3)</p>
          </div>
          <div className="flex flex-rows items-center">
            <HiOutlineClock className="mt-1/2 mr-1 text-custom-color-1" />
            <p>Last 24 Hours</p>
            <p className="bg-red-500 border-0  text-center rounded-full text-[10px] ml-2 p-[3px] mt-1  w-5   font-bold text-white ">
              51
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end mt-10">
        <Link to="/chat">
          <button className="bg-custom-color-1 px-4 py-2 rounded-3xl text-[16px]  font-bold mr-10 ">
            View Group
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
