import React, { useState } from "react";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import profile from "../../assets/img/profile_img.png";
import { AiFillCaretDown } from "react-icons/ai";
import SideBar3 from "../sideBar3";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row ml-10 mt-5">
      {isOpen && <SideBar3 />}
      <div className="flex flex-row items-center w-full justify-between">
        <div className="flex flex-row items-center space-x-2 text-4xl text-white">
          <RxHamburgerMenu onClick={toggleSideBar} className="font-bold" />
          <p className="lg:text-[32px] text-[26px] font-semibold">Dashboard</p>
        </div>
        <div className="justify-items-center base-1/2  bg-custom-color-5 items-center rounded-3xl pl-6 pr-32 lg:flex hidden">
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
        <div className="lg:hidden flex flex-1 h-10 w-24 aspect-auto justify-center mt-4">
          <RxMagnifyingGlass className="text-white font-bold" size={26} />
        </div>
        <div className="flex flex-rows h-10 w-30 justify-end">
          <img className="mr-2" src={profile} alt="" />
          <p className="items-center text-white mt-2 mr-2">Hello Admin</p>
          <AiFillCaretDown className="text-white mt-3 mr-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
