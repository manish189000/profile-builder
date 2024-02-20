import React from "react";
// import r1 from "../../assets/drag2.png";

const Resume2 = () => {
  return (
    <>
      <div className="parent-part flex items-center justify-center sm:flex-col bg-[#efece8] px-8 sm:px-4 py-14 air:py-18 sm:pt-28 ">
        <div className="sub-parent-left flex-wrap w-full pl-10 sm:pl-0 air:pl-4 ">
          <p className="font-raleway text-scrlt font-bold text-4xl air:pl-0 sm2:pl-4">
            Score and fix your resume
          </p>
          <p className="font-inter text-scrlt pt-10 air:pt-8 air:pl-0 sm2:pl-4">
            Once your resume is ready, our resume builder will score it against
            other candidates applying for the same jobs. You will get detailed
            tips on how exactly to fix your resume to have a much greater chance
            of securing an interview.
          </p>
        </div>

        <div className="sub-parent w-fit">
          <img
            className="w-full air:w-[80%] sm:w-full h-auto"
            // src={r1}
            alt="Resume 1"
          />
        </div>
      </div>
    </>
  );
};

export default Resume2;
