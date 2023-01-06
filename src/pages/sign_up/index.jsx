import React from "react";
import logo from "./../../assets/img/logo.png";
import signInImage from "./../../assets/img/sign_in_img.png";
import InputField from "./../../components/inputField";
import BottomButton from "../../components/bottomButton";

const SignUp = () => {
  return (
    <section className="bg-custom-color-4 w-full min-h-screen h-auto flex items-center pt-12 pb-12">
      <div class="container mx-auto sm:px-4">
        <div class="flex flex-wrap ">
          <div class="lg:w-1/2 lg:pr-4 lg:pl-4 md:w-full md:pr-4 md:pl-4 sm:w-full pr-4 pl-4">
            <div class="mb-8">
              <div class="m-auto mb-12 w-[300px]">
                <img class="max-w-full h-auto w-[300px]" src={logo} alt="" />
              </div>
              <div class="m-auto w-[400px]">
                <img
                  class="max-w-full h-auto m-auto text-center flex items-center justify-center"
                  src={signInImage}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class=" lg:mt-[1%]  lg:w-1/2 lg:pr-4 lg:pl-4 md:w-full md:pr-4 md:pl-4 sm:w-full pr-4 pl-4">
            <div class="text-5xl font-bold text-center text-white ">
              <h1 class="text-5xl font-bold text-center text-white leading-3">
                Sign Up
              </h1>
              <p class="pt-2 text-2xl font-normal text-center leading-6 text-white pb-5 tracking-wide mt-7">
                Enter Your Details To Login
              </p>
              <div class="w-[75%] m-auto ">
                <form action="dashboard.html" className="mt-5">
                  <div className="flex flex-row  space-x-8">
                    <InputField text="First Name" />
                    <InputField text="Last Name" />
                  </div>
                  <input
                    className="m-auto text-xl block w-full text-white  bg-custom-color-5 pt-4 pr-4 rounded-xl border-0 placeholder:text-custom-color-7 placeholder:text-base font-normal tracking-wide
                     focus:outline-none pl-4 focus:border-transparent pb-5"
                    type="text"
                    placeholder="Email"
                  />
                  <div class="block  text-right mb-7   ">
                    <a
                      href="forgot.html"
                      class=" text-custom-color-3  text-base  font-semibold tracking-normal no-underline hover:"
                    >
                      Forgot Password?
                    </a>
                  </div>
                    <BottomButton text="Next" />
                </form>
                <p class="text-xl font-normal text-center pt-1 leading-6 text-white mt-4">
                  Already have an account?{"  "}
                  <a
                    className="text-custom-color-6 no-underline"
                    href="./sign_up.html"
                  >
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
