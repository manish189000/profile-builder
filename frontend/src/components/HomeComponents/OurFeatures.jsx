import React from "react";
import feature from "../../assets/feature2.svg";
import { MdEditDocument } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { IoIosCreate } from "react-icons/io";

const OurFeatures = () => {
  return (
    <>
      <div className="mainContainer py-10 pr-8 w-[100%]  bg-oliv flex font-poppins sm:px-8">
        {/*Left*/}
        <div className="leftsec relative w-[60%] lg:w-[50%] md:w-[40%] flex items-center justify-center px-4 rounded-r-full bg-lteal  shadow-xl sm:hidden">
          <img
            src={feature}
            className="feature w-[60%] lg:w-[80%] transition ease-in-out delay-100 rounded-md m480:p-4"
          />
        </div>
        {/*Right */}
        <div className="rightsec pl-4 sm:pl-0 w-[40%] lg:w-[50%] md:w-[60%] flex flex-col justify-center items-center sm:w-[100%]">
          <h1 className="hero-head text-[40px] font-poppins text-scrlt font-bold leading-tight m480:text-center">
            Our Main Features
          </h1>
          <div className="features py-[25px] flex flex-col gap-5 air:py-[20px]">
            <div className="wwrap group flex items-center gap-3 p-4 rounded-xl">
              <div className="icon w-[60px]">
                <IoIosCreate className="text-lteal text-[60px] block float-left cursor-pointer bg-dbeige rounded-full p-4 transition-transform duration-300 transform origin-center group-hover:scale-110" />
              </div>
              <div className="cntnt">
                <h3 className=" text-[25px] font-poppins text-scrlt font-bold ">
                  Resume Generator
                </h3>
                <p className="font-poppins font-normal text-scrlt">
                  Revamp your job search with our advanced Resume Generator.
                </p>
              </div>
            </div>
            <div className="wwrap group flex items-center gap-3 p-4 rounded-xl">
              <div className="icon w-[60px]">
                <FcDocument className="text-lteal text-[60px] block float-left cursor-pointer bg-dbeige rounded-full p-4 transition-transform duration-300 transform origin-center group-hover:scale-110" />
              </div>
              <div className="cntnt">
                <h3 className=" text-[25px] font-poppins text-scrlt font-bold ">
                  Cover Letter Generator
                </h3>
                <p className="font-poppins font-normal text-scrlt">
                  Upgrade your application with our Cover Letter Generator tool.
                </p>
              </div>
            </div>
            <div className="wwrap group flex items-center gap-3 p-4 rounded-xl ">
              <div className="icon w-[60px]">
                <MdEditDocument className="text-lteal text-[60px] block float-left cursor-pointer bg-dbeige rounded-full p-4 transition-transform duration-300 transform origin-center group-hover:scale-110" />
              </div>
              <div className="cntnt">
                <h3 className=" text-[25px] font-poppins text-scrlt font-bold ">
                  Resume Rewriter
                </h3>
                <p className="font-poppins font-normal text-scrlt">
                  Transform your resume with our innovative Resume Rewriter
                  tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Resume Generator Cover Letter Generator Resume Rewriter/ */}
    </>
  );
};

export default OurFeatures;
