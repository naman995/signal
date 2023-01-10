import React from "react";
import Navbar3 from "../../components/navbar3";
// import Sidebar from "../../components/sideBar";

import Sidebar4 from "../../components/sidebar4";
import Prices from "../prices";

const Plans = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  return (
    <div className="flex flex-row h-screen">
      {isSidebarOpen && <Sidebar4 />}
      <div className="w-full min-h-screen bg-custom-color-4 flex flex-col">
        <Navbar3 sidebar={setIsSidebarOpen} />
        <main className="h-full mt-4 pb-4">
          <Prices />
        </main>
      </div>
    </div>
  );
};

export default Plans;
