import React from "react";
import { Link } from "react-router-dom";
import MonthlyCard from "../../components/monthlyCard";

const Prices = () => {
  return (
    <div className="bg-custom-color-5 lg:w-[98%] py-8 rounded-3xl lg:h-full">
      <div className="flex flex-row justify-between px-8"></div>
      {/* Monthly Card */}
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-8 px-8 gap-4">
        <div className="bg-custom-color-4 lg:w-84 w-full h-72 rounded-3xl">
          <div className="flex flex-rows">
            <div className="text-white mt-5 ">
              <p className="text-xl text-custom-color-1 font-bold ml-10 ">
                Trail Plan
              </p>
            </div>
          </div>
          <div className="border-t-4 rounded-3xl border-custom-color-1 w-12   mt-2 ml-10 "></div>

          <div className="flex flex-row text-white ml-5 mt-6">
            <p className="text-6xl font-bold">$6</p>
            <p className="mt-8 text-xl font-bold"> / 5 days</p>
          </div>
          <p className="text-red-500 ml-5 text-xl mt-2">**2 days left</p>
          <div className="flex flex-row justify-center mt-6">
            <Link to="/chat">
              <button className="bg-custom-color-1  px-4 py-2 rounded-3xl text-[16px]  font-bold mr-10 ">
                Renew Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-8 px-8 gap-4">
        <MonthlyCard text="Monthly Plan" price="29" day="1" />
        <MonthlyCard text="Quaterly Plan" price="79" day="3" />
        <MonthlyCard text="Yearly  Plan" price="299" day="12" />
      </div>
    </div>
  );
};

export default Prices;
