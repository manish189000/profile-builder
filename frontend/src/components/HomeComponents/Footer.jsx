import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="footer w-full flex flex-col items-center bg-oliv text-scrlt p-8">
        <div className="foter-items flex flex-col items-center justify-center text-center mb-4">
          {/* <li className="text-lg font-pop font-bold list-none text-[47px] m480:leading-[4rem]">
            Resume-builder-ai
          </li> */}
          <div className="logo tracking-wider cursor-pointer font-mono text-[25px] font-bold text-scrlt">
            Profile Builder
          </div>

          <div className="list-items pt-4">
            <p className="para w-[60%] m-auto font-inter font-normal ">
              Empowering individuals to shape their professional futures, one
              profile at a time. Stay connected with us for the latest career
              insights and updates.
            </p>
          </div>
        </div>
        <div className="Social-media flex mt-4 space-x-6">
          <FaFacebook className="icon text-cyan-700 text-[30px]" />
          <FaXTwitter className="text-[30px] text-black" />
          <FcGoogle className="text-[30px]" />
          <FaYoutube className="text-[30px] text-red-700" />
          <IoLogoLinkedin className="text-[30px] text-blue-700" />
        </div>
        <div className="footer-end mt-6 w-full">
          <hr className="border-scrlt" />
          <div className="mt-2 text-center  m480:text-center font-pop font-normal  ">
            <span className="font-medium">&copy;</span>
            <span className=" font-mono">Profile Builder </span>
            2024. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
