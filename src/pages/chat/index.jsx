import React from "react";
import Sidebar from "../../components/sideBar";
import Navbar2 from "../../components/navbar2";
import { RxMagnifyingGlass } from "react-icons/rx";

import Text from "../../components/text";

const Chat = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-full h-[98vh] bg-custom-color-4 flex flex-col">
        <Navbar2 />
        <div className="bg-custom-color-5 lg:w-[98%] py-1 relative flex-grow rounded-3xl mt-5 lg:h-full overflow-y-auto ">
          <div className="">
            <RxMagnifyingGlass className="absolute text-white top-10 right-16  flex items-center rounded-full text-3xl       " />
          </div>
          <div className="mb-20">
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
            <Text
              name="Vivek Kumar Lal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              time="7:23 PM, 10 Nov 2022"
            />
          </div>
          <div className="relative">
            <input
              className=" fixed w-[80%] bottom-1 m-auto text-xl block  text-white  bg-custom-color-5 pt-4 pr-4 rounded-xl border-0  placeholder:text-custom-color-7 placeholder:text-base font-normal tracking-wide
                    focus:outline-none pl-4   focus:border-transparent pb-5 "
              type="text"
              placeholder="Type a message"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
