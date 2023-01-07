import React from "react";
import Sidebar from "../../components/sideBar";
import Navbar from "../../components/navbar";
import DisplayCards from "../../components/displayCards";

const DashBoard = () => {
  return (
    <div className="bg-custom-color-4 flex flex-row">
        <div className="w-[16%]">
            <Sidebar/>
        </div>
        <div className="w-[84%]">
            <Navbar/>
            <DisplayCards/>
        </div>
    </div>

  );
};

 
 
 

export default DashBoard;
