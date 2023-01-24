import { useContext, useEffect, useState } from "react";
import { NavContext } from "../context/NavContextProvider";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavbarOptionSelect = () => {
    setShowNav(false)
  }
  return (
    <>
      <div className={`z-10 w-screen p-5  mx-auto fixed text-[#ffffff]`}>
        <div className="flex w-full justify-center px-5">
          <ul className="justify-center gap-10 uppercase p-5 hidden sm:flex relative">
            <li className="tracking-widest cursor-pointer">
              <a href="#aboutme">About me</a>
            </li>
            <li className="tracking-widest cursor-pointer">
              <a href="#education">Education</a>
            </li>
            <li className="tracking-widest cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="tracking-widest cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="tracking-widest cursor-pointer">Experience</li>
            <li className="tracking-widest cursor-pointer">socials</li>
            <li className="tracking-widest cursor-pointer">contact</li>
          </ul>
        </div>
      </div>

      <div
        className=" flex flex-col left-10 top-10 gap-1 absolute sm:hidden z-40 cursor-pointer"
        onClick={() => setShowNav((p) => !p)}
      >
        <p
          className={`h-1 w-7 bg-white rounded-md ${
            showNav ? "rotate-45 translate-y-2" : ""
          } transition-all duration-200`}
        ></p>
        <p
          className={`h-1 w-7 bg-white rounded-md ${
            showNav ? "hidden" : " "
          } transition-all duration-100`}
        ></p>
        <p
          className={`h-1 w-7 bg-white rounded-md  ${
            showNav ? "-rotate-45" : ""
          } transition-all duration-100`}
        ></p>
      </div>

      <div
        className={`absolute bg-[rgba(0,0,0,0.7)] h-screen w-[200px] px-5 py-28 z-30 left-[-200px] ${
          showNav ? "translate-x-[200px]" : "translate-x-0"
        }  transition-all sm:hidden`}
      >
      
          <ul className="flex flex-col gap-5">

          <li className="text-white" onClick={() => handleNavbarOptionSelect()}>
            <a href="#aboutme">About me</a>
            <p className="w-40 h-[2px] rounded-sm bg-gray-600 mt-3"></p>
          </li>
          <li className="text-white" onClick={() => handleNavbarOptionSelect()}>
            <a href="#education">Education</a>
            <p className="w-40 h-[2px] rounded-sm bg-gray-600 mt-3"></p>
          </li>
          <li className="text-white" onClick={() => handleNavbarOptionSelect()}>
            <a href="#skills">Skills</a>
            <p className="w-40 h-[2px] rounded-sm bg-gray-600 mt-3"></p>
          </li>
          <li className="text-white" onClick={() => handleNavbarOptionSelect()}>
            <a href="#projects">Projects</a>
            <p className="w-40 h-[2px] rounded-sm bg-gray-600 mt-3"></p>
          </li>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
