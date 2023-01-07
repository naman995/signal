import React from 'react'

const ProgressBar = ({ progress }) => {
  return (
    <div className="bg-custom-color-8 h-3 rounded-full relative w-auto ">
      <div
        className="bg-custom-color-1 h-full rounded-full absolute left-0 top-0"
        style={{ width: `${progress}%` }}
      ></div>
      <p className='items-center text-[12px] pt-5 text-custom-color-1'>Step 1 / Step 2</p>
    </div>
  );
};

export default ProgressBar