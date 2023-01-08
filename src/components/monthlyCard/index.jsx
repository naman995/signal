import React from 'react'
import { Link } from 'react-router-dom'
const MonthlyCard = ({text,price,day}) => {
  return (
    <div className="bg-custom-color-4 lg:w-84 w-full h-64 rounded-3xl">
      <div className="flex flex-rows">
        <div className="text-white mt-5 ">
          <p className="text-xl text-custom-color-1 font-bold ml-10 ">
            {text}
          </p>
        </div>
      </div>
      <div className="border-t-4 rounded-3xl border-custom-color-1 w-12   mt-2 ml-10 "></div>

      <div className="flex flex-row text-white ml-5 mt-6    ">
        <p className="text-6xl font-bold">${price}</p>
        <p className="mt-8 text-xl font-bold"> / {day} months</p>
      </div>
     
      <div className="flex flex-row justify-center mt-6">
        <Link to="/chat">
          <button className="bg-custom-color-1  px-4 py-2 rounded-3xl text-[16px]  font-bold mr-10 ">
            Upgrade Plan
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MonthlyCard