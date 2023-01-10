import React,{useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../assets/img/profile_img.png";
import { AiFillCaretDown } from "react-icons/ai";
// import SideBar4 from "../sidebar4";
import UserMenu from "../UserMenu";
const Navbar3 = ({ sidebar: setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    setIsSidebarOpen(!isOpen);
  };
  return (
    <div className="flex flex-row ml-10 mt-5">
      {/* {isOpen && <SideBar4 />} */}
      <div className="flex flex-row items-center w-full justify-between">
        <div className="flex flex-row items-center space-x-2 text-4xl text-white">
          <RxHamburgerMenu onClick={toggleSideBar} className="font-bold" />

          <p className="lg:text-[32px] text-[26px] font-semibold">Profile</p>
        </div>

        <div
          className="flex flex-rows h-10 w-30 justify-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img className="mr-2" src={profile} alt="" />
          <p className="items-center text-white mt-2 mr-2">Hello Admin</p>
          <AiFillCaretDown className="text-white mt-3 mr-8" />
        </div>
        {isMenuOpen && <UserMenu />}
      </div>
    </div>
  );
};

export default Navbar3;
