import React, { useState } from "react";
import logo from "../image/logo 1.png";
import userPhoto from "../image/userImg.png";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [name , setName] = useState("UserName");
  return (
    <nav className="fixed top-0 left-0  w-full h-[90px]  bg-[#F0F0F0] shadow-md shadow-gray-400 z-50 flex items-center justify-between px-7">
      <div className=" w-44 sm:w-60">
        <img src={logo} alt="logo" />
      </div>
      <div className="sm:flex items-center gap-5 hidden">
        <div className="bg-[#3683F0] text-white p-2 rounded-full group hover:scale-105 cursor-pointer">
          <FaHome size={30} className="group-hover:scale-105"/>
        </div>
        <div className="bg-[#3683F0] text-white p-2 rounded-full group hover:scale-105 cursor-pointer">
          <FaTools size={25} className="group-hover:scale-105"/>
        </div>
        <div className="bg-[#3683F0] text-white p-2 rounded-full group hover:scale-105 cursor-pointer">
          <div className="relative">
            <IoIosNotifications size={30} className="group-hover:scale-105"/>
            <div className=" absolute top-0 right-0 text-red-600">
              <GoDotFill size={17} className=""/>
            </div>
          </div>
        </div>
        <div className="w-12 aspect-square text-2xl text-white font-semibold flex items-center justify-center bg-[#3683F0] rounded-full cursor-pointer group hover:scale-105">
          {name?.split("")?.[0]}
        </div>
        <div className="text-[#3683F0] cursor-pointer hover:scale-105">
          <PiDotsThreeOutlineVerticalFill size={30} />
        </div>
      </div>
      <div className="relative  group p-1 sm:hidden">
        <RxHamburgerMenu size={30} className=" cursor-pointer"/>
        <div className="absolute w-40 -right-5 top-9 bg-white  rounded-lg overflow-hidden shadow-lg shadow-gray-500 hidden flex-col group-hover:flex transform transition-all ease-linear duration-700">
          <div className="hover:bg-[#3683F0] hover:text-white p-2 cursor-pointer">Home</div>
          <div className="hover:bg-[#3683F0] hover:text-white p-2 cursor-pointer">Tools</div>
          <div className="hover:bg-[#3683F0] hover:text-white p-2 cursor-pointer">Notification</div>
          <div className="hover:bg-[#3683F0] hover:text-white p-2 cursor-pointer">Profile</div>
          <div className="hover:bg-[#3683F0] hover:text-white p-2 cursor-pointer">More</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
