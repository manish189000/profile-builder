import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowRoundBack } from "react-icons/io";

const ResumeGeneratorMain = () => {
  return (
    <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
      <Link to={`/dashboard`}>
        <div className="flex gap-1 items-center cursor-pointer text-black">
          {/* <Link to={`/dashboard`}> */}
          <IoIosArrowRoundBack />
          {/* </Link> */}
          {/* <Link to={`/dashboard`}> */}
          <p className="text-sm font-inter text-black">Back to dashboard</p>
          {/* </Link> */}
        </div>
      </Link>

      <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
        Resume generator
      </h1>
      <p className="text-sm text-gray-400 font-inter py-2">
        Resume and Cover letter Generator
      </p>
    </div>
  );
};

export default ResumeGeneratorMain;
