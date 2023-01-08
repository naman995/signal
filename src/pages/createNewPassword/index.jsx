import React from "react";
import logo from "./../../assets/img/logo.png";
import signInImage from "./../../assets/img/sign_in_img.png";
import InputField from "./../../components/inputField";
import BottomButton from "../../components/bottomButton";
import { Link } from "react-router-dom";

const CreatePassword = () => {
  return (
    <section className="bg-custom-color-4 w-full min-h-screen h-auto flex items-center pt-12 pb-12">
      <div class="container mx-auto sm:px-4">
        <div class="flex flex-wrap ">
          <div class="lg:w-1/2 lg:pr-4 lg:pl-4 md:w-full md:pr-4 md:pl-4 sm:w-full pr-4 pl-4">
            <div class="mb-8">
              <div class="m-auto mb-12 w-[300px]">
                <img class="max-w-full h-auto w-[300px]" src={logo} alt="" />
              </div>
              <div class="m-auto w-[400px] animate-bounce-slow ">
                <img
                  class="mt-10 max-w-full h-auto m-auto text-center flex items-center justify-center"
                  src={signInImage}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class=" lg:mt-[1%]  lg:w-1/2 lg:pr-4 lg:pl-4 md:w-full md:pr-4 md:pl-4 sm:w-full pr-4 pl-4">
            <div class="text-5xl font-bold text-center text-white ">
              <h1 class="text-5xl font-bold text-center text-white leading-3">
                Create New Password
              </h1>
              <p class="pt-2 text-2xl font-normal text-center leading-6 text-white pb-5 tracking-wide mt-7">
                Enter Your New Password
              </p>
              <div class="w-[75%] m-auto ">
                <form action="dashboard.html" className="mt-5">
                  <InputField type="Password" text="New Password" />
                  <InputField type="Password" text="Confirm Password" />
                </form>
                <div class="block text-right mb-7 -mt-5">
                  <div class=" text-custom-color-3  text-base  font-semibold tracking-normal no-underline hover:">
                    <Link to="/">Login</Link>
                  </div>
                </div>
                <Link to="/dashboard">
                  <BottomButton text="Submit" />
                </Link>
                <p class="text-xl font-normal text-center pt-1 leading-6 text-white mt-4">
                  Don’t Have an Account ? {"  "}
                  <a
                    className="text-custom-color-6 no-underline"
                    href="./sign_up.html"
                  >
                    {" "}
                    <Link to="/">Sign Up</Link>
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

export default CreatePassword;
