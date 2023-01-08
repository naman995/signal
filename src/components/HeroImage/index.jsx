import React from 'react'
import logo from "./../../assets/img/logo.png";
import signInImage from "./../../assets/img/sign_in_img.png";

function HeroImage() {
  return (
    <div class="lg:w-1/2 lg:pr-4 lg:pl-4 w-full md:pr-4 md:pl-4 sm:w-full pr-4 pl-4">
      <div class="mb-8">
        <div class="m-auto mb-12 w-[300px]">
          <img class="max-w-full h-auto w-[300px]" src={logo} alt="" />
        </div>
        <div class="m-auto w-[400px] mt-[100px] animate-bounce-slow ">
          <img
            class="mt-10 max-w-full h-auto m-auto text-center flex items-center justify-center"
            src={signInImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImage