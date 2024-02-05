import React from "react";
// import hero from "../../assets/hero.png";
import hero2 from "../../assets/hero2.svg";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import arrowgrn from "../../assets/arrowgrn.svg";
import linegrn from "../../assets/linegrn.svg";
import hatbeige from "../../assets/hatbeige.svg";
import twolinesbeige from "../../assets/twolinebeige.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Navbar relative px-8 w-[100%] h-[11vh] bg-oliv flex justify-between items-center">
        {/* <div className="empty"></div> */}
        <div className="logo tracking-wider cursor-pointer font-rubik text-[25px] font-bold text-scrlt">
          Profile Builder
        </div>
        <div className="login font-poppins text-[18px] font-medium text-scrlt">
          <button className="loginBtn transition ease-in-out delay-100 px-5 py-2 border-[2px] border-oliv rounded-md hover:border-[2px] hover:py-2 hover:px-5 hover:border-scrlt hover:rounded-md lg:hidden">
            login
          </button>
        </div>
        <div className="Menu text-[28px] font-extrabold text-scrlt hidden lg:block">
          <RiMenu3Line onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <div className="loginmodal transition ease-in-out delay-150 absolute z-50 right-0 text-center p-3 w-[100px] bg-lteal font-poppins text-[18px] font-medium text-scrlt">
          login
        </div>
      )}

      {/* ///////////////////////////////////////// */}
      <div className="hero relative pl-8 w-[100%] h-[89vh] bg-oliv flex m480:flex-col m480:h-[100dvh]  m480:justify-between m480:pl-0">
        <div className="left-sec pr-4 w-[40%] lg2:w-[50%] flex flex-col justify-center items-start m480:w-[100%] m480:items-center m480:text-center m480:px-8 m480:py-[15px]">
          <h1
            className="hero-head text-[40px] font-poppins text-scrlt font-bold leading-tight"
            // data-aos="fade-right"
            // data-aos-once="true"
            // data-aos-duration="1000"
          >
            Craft your success story with your AI Brand.
          </h1>
          <p className="py-[25px] font-poppins text-scrlt font-normal m480:py-[15px]">
            Effortlessly craft standout resumes with Your AI Brand, showcasing
            skills and experience for a competitive edge.
          </p>
          <button className="get-startedBtn transition ease-in-out delay-100 text-[16px] bg-scrlt px-6 py-3 rounded-md text-oliv hover:bg-lteal hover:text-scrlt">
            Get Started
          </button>
        </div>
        <div className="Right-sec relative w-[60%] lg2:w-[50%] flex items-center justify-center px-4 rounded-l-md bg-lteal m480:w-[100%] m480:rounded-none">
          <img
            src={hero2}
            className="heroImage w-[60%] lg:w-[80%] transition ease-in-out delay-100 rounded-md m480:p-4"
          />
        </div>
        <img
          src={arrowgrn}
          className="absolute z-50 left-[16%] top-[62%] rotate-[200deg]"
        />
        <img
          src={linegrn}
          className="absolute z-50 left-[0%] top-[22%] rotate-[-45deg]"
        />
        <img
          src={twolinesbeige}
          className="absolute z-50 right-[50%] top-[1%] opacity-50"
        />
        <img
          src={twolinesbeige}
          className="absolute z-50 top-[91%] right-[5%] rotate-[180deg] opacity-50"
        />
      </div>
    </>
  );
};

export default HeroSection;
