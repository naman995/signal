import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../assets/img/profile_img.png";
import { AiFillCaretDown } from "react-icons/ai";
import BoxImg from "../../assets/img/box_img.png";
const Navbar2 = () => {
  return (
    <div className="flex flex-row ml-10 mt-5">
      <div className="flex flex-row items-center w-full justify-between">
        <div className="flex flex-row items-center space-x-2 text-4xl text-white">
          <RxHamburgerMenu className="font-bold" />
            <img className="w-12" src={BoxImg} alt="" />
          <p className="lg:text-[32px] text-[26px] font-semibold">Pseudo Group</p>
        </div>
         
        
        <div className="flex flex-rows h-10 w-30 justify-end">
          <img className="mr-2" src={profile} alt="" />
          <p className="items-center text-white mt-2 mr-2">Admin</p>
          <AiFillCaretDown className="text-white mt-3 mr-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
