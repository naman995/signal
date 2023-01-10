import React from "react";
import Sidebar from "../../components/sideBar";
import Navbar from "../../components/navbar";
import DisplayCards from "../../components/displayCards";

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  return (
    <div className="flex lg:flex-row flex-col h-screen">
      {isSidebarOpen && <Sidebar />}
      <div className="w-full min-h-screen bg-custom-color-4 flex flex-col">
        <Navbar sidebar={setIsSidebarOpen} />
        <main className="h-full mt-4 pb-4">
          <DisplayCards />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
