import React from "react";

const CountryDropdown = () => {
  return (
    <div className="relative w-full">
      <select
        className=" m-auto text-xl block w-full text-white mb-6 bg-custom-color-5 pt-4 pr-4 rounded-xl border-0  placeholder:text-custom-color-7 placeholder:text-base font-normal tracking-wide
                    focus:outline-none pl-4   focus:border-transparent pb-5 placeholder: "
        id="grid-state"
      >
        <option>Country</option>
        <option>Counrty</option>
      </select>
    </div>
  );
};

export default CountryDropdown;
