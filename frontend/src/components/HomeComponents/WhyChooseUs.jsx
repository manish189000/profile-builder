import { IoThumbsUpSharp } from "react-icons/io5";
import { FaFileLines } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const WhyChooseUs = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="main-conatiner w-[100%] py-28 bg-dbeige flex flex-col justify-center air:items-center"
      >
        <div className="right-sec pb-8">
          <h1 className="whychoose text-center px-8 text-[34px] font-bold font-raleway text-scrlt sm:px-4">
            Why Choose Our Platform?
          </h1>
        </div>
        <div
          className="left-sec w-[100%] px-8 flex gap-6 air:flex air:flex-col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="threeKeys bg-oliv  shadow-xl hover:scale-105 transition ease-in-out delay-150 px-10 py-10  rounded-xl flex flex-col items-center gap-3 air:hover:scale-100">
            <IoThumbsUpSharp className="thumpsup bg-dbeige text-scrlt rounded-full p-4 text-[4rem]" />
            <div className="rightwrp text-scrlt text-center flex flex-col gap-2">
              <h2 className="h2 text-[20px] font-semibold font-raleway">
                User-Friendly Interface
              </h2>
              <p className="p font-inter font-normal text-base">
                Intuitive interface ensures a seamless experience for users
                crafting professional profiles and resumes on our website.
              </p>
            </div>
          </div>
          <div className="threeKeys bg-oliv text-scrlt shadow-xl hover:scale-105 transition ease-in-out delay-150 px-10 py-10 rounded-xl flex flex-col items-center gap-3 air:hover:scale-100">
            <FaFileLines className="resume bg-dbeige rounded-full p-4 text-[4rem]" />
            <div className="rightwrp text-center flex flex-col gap-2">
              <h2 className="h2 text-[20px] font-semibold font-raleway">
                Easy Online Resume Builder
              </h2>
              <p className="p font-inter font-normal text-base">
                Effortlessly create a professional resume that highlights your
                skills with our streamlined online resume builder.
              </p>
            </div>
          </div>
          <div className="threeKeys bg-oliv text-scrlt shadow-xl hover:scale-105 transition ease-in-out delay-150 px-10 py-10  rounded-xl flex flex-col items-center gap-3 air:hover:scale-100">
            <MdSecurity className="security bg-dbeige rounded-full p-4 text-[4rem]" />
            <div className="rightwrp text-center flex flex-col gap-2">
              <h2 className="h2 text-[20px] font-semibold font-raleway">
                Data Security Assurance
              </h2>
              <p className="p font-inter font-normal text-base">
                Privacy is our priority, robust security ensures a safe space
                for creating and storing professional documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default WhyChooseUs;
