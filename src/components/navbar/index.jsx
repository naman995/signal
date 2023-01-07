import React from "react";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import profile from "../../assets/img/profile_img.png";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex flex-row ml-10 mt-5">
      <div className="flex  items-center w-full justify-between">
        <div className="flex flex-row flex-1 items-center space-x-2 text-4xl text-white">
          <RxHamburgerMenu className="mt-2 font-bold" />
          <p>Dashboard</p>
        </div>
        <div className="flex-1  justify-items-center base-1/2 w-[100%] flex flex-row bg-custom-color-5 items-center rounded-3xl pl-6 pr-32">
          <RxMagnifyingGlass
            className="text-custom-color-7 font-bold"
            size={26}
          />
          <input
            className="  m-auto text-xl block w-full text-white  bg-custom-color-5 pt-2 pr-4 rounded-xl border-0  placeholder:text-custom-color-7 
            placeholder:text-base font-normal tracking-wide focus:outline-none pl-4   focus:border-transparent pb-3 "
            type="text"
            placeholder="Search By Name"
          />
        </div>
        <div className="flex flex-rows flex-1 h-10 w-24  aspect-auto justify-end">
          <img className="mr-2" src={profile} alt="" />
          <p className="items-center text-white mt-2 mr-2">Hello Admin</p>
          <AiFillCaretDown className="text-white mt-3 mr-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
