import r1 from "../../assets/resume1.png";

const Resume1 = () => {
  return (
    <>
      <div className="parent-part flex items-center justify-center sm:flex-col bg-[#efece8] px-8 sm:px-4 py-10 air:py-18 sm:pt-28 ">
        <div className="sub-parent w-fit">
          <img
            className="w-full air:w-[80%] sm:w-full h-auto"
            src={r1}
            alt="Resume 1"
          />
        </div>

        <div className="sub-parent-left flex-wrap w-full pl-10 sm:pl-0 air:pl-4 ">
          <p className="font-raleway text-scrlt font-bold text-4xl air:pl-0 sm2:pl-4">
            Upload and automatically reformat your old resume
          </p>
          <p className="font-inter text-scrlt pt-10 air:pt-8 air:pl-0 sm2:pl-4">
            Have an old resume with an outdated layout? Upload it to our resume
            maker, and we’ll transform it into a fresh, contemporary design
            absolutely free of charge. Save time, and enjoy your new, modern
            resume in just a few minutes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume1;
// sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-2/5 py-8 air:py-0 sm2:w-4/5 sm3:w-full
