import React from "react";
import logo from "../../assets/img/header_logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
const Sidebar = () => {
  return (
    <aside className="h-full w-[280px] pt-5 lg:block hidden bg-custom-color-4">
      <div className="flex flex-rows items-center justify-center">
        <img className="h-16  w-auto" src={logo} alt="logo" />
      </div>
      <div>
        <div className=" mt-6 flex flex-rows text-white items-center mx-5 text-2xl bg-custom-color-1 py-2 rounded-3xl px-3 ">
          <AiOutlineHome className="text-gray-800" />
          <h2 className="text-gray-800 ml-2 font-semibold  "> Dashboard</h2>
        </div>
        <div className="mt-6 flex flex-rows text-white items-center mx-5 text-2xl rounded-xl px-3 ">
          <MdOutlineEventNote className="text-white" />
          <p className="text-white ml-2 font-semibold"> Plans</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
