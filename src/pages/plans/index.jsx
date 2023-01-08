import React from "react";
import Navbar3 from "../../components/navbar3";

import Sidebar2 from "../../components/sidebar2";
import Prices from "../prices";

const Plans = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar2 />
      <div className="w-full min-h-screen bg-custom-color-4 flex flex-col">
        <Navbar3 />
        <main className="h-full mt-4 pb-4">
          <Prices />
        </main>
      </div>
    </div>
  );
};

export default Plans;
