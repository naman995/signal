import React from "react";
import Sidebar from "../../components/sideBar";
import Navbar from "../../components/navbar";
import DisplayCards from "../../components/displayCards";

const DashBoard = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-full min-h-screen bg-custom-color-4 flex flex-col">
        <Navbar />
        <main className="h-full mt-4 pb-4">
          <DisplayCards />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
