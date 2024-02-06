import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="footer w-full flex flex-col items-center bg-oliv text-scrlt p-8">
        <div className="foter-items flex flex-col items-center justify-center text-center mb-6">
          <li className="text-lg font-pop mb-2 font-bold list-none text-[47px]   m480:leading-[4rem]">
            Resume-builder-ai
          </li>
          <div className="list-items pt-10">
            <p className="para w-[60%] m-auto font-pop font-normal ">
              Now I have added a description in the footer design using the
              following codes. Text font-size: 14px and color white used.with
              required source code
            </p>
          </div>
        </div>
        <div className="Social-media flex mt-4 space-x-4">
          <FaFacebook className="icon text-cyan-700 text-[40px] rounded-full bg-white p-2" />
          <FaTwitter className="text-[40px] text-blue-400 rounded-full bg-white p-2" />
          <FcGoogle className="text-[40px] rounded-full bg-white p-2" />
          <FaYoutube className="text-[40px] text-red-700 rounded-full bg-white p-2" />
          <IoLogoLinkedin className="text-[40px] text-blue-700 rounded-full bg-white p-2" />
        </div>
        <div className="footer-end mt-6 w-full">
          <hr className="border-scrlt" />
          <div className="mt-2 text-center  m480:text-center font-pop font-normal  ">
            @copyright resume media ai
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
