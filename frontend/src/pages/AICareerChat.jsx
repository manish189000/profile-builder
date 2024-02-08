import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { SiChatbot } from "react-icons/si";

// import { Link2 } from "react-router-dom";

const AICareerChat = () => {
  return (
    <>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div className="flex gap-1 items-center text-black">
          <Link to={`/dashboard`}>
            <IoIosArrowBack />
          </Link>
          <Link to={`/dashboard`}>
            <p className="text-sm font-inter text-black">Back to dashboard</p>
          </Link>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          AI Career Chat
        </h1>
        <p className="text-sm text-gray-300 font-inter py-2">
          Provide us with a snapshot of your key details, and our AI will craft
          a tailored resume just for you.
        </p>
      </div>
      {/* //////// */}

      <div className="w-full px-4 py-3 border-b-gray-200  flex flex-wrap items-center gap-8 sm:flex-col">
        <div className="service w-[300px] sm:w-full h-60 sm:h-[220px] shadow-lg rounded-md p-6 sm:px-2 cursor-pointer group ">
          <FaRegStar className="star text-lg " />
          <div className="wrapp flex flex-col gap-2 items-center pt-6">
            <SiChatbot className="text-lteal text-[60px] pb-2 block cursor-pointer transition-transform duration-300 transform origin-center group-hover:scale-110" />
            <h1 className="text-2xl text-black font-inter font-semibold">
              AI Chat Bot
            </h1>
            <p className="text-black font-inter text-sm">
              Intelligent virtual chat assistant.
            </p>
          </div>
        </div>
        {/* //////// */}

        <div className="service w-[300px]  sm:w-full h-60 sm:h-[220px] shadow-lg rounded-md p-6 sm:px-2 cursor-pointer group ">
          <FaRegStar className="star text-lg" />
          <div className="wrap  flex flex-col gap-2 items-center pt-6">
            <FaHandsHelping className="text-scrlt text-[60px] pb-2 block  cursor-pointer transition-transform duration-300 transform origin-center group-hover:scale-110" />
            <h1 className="text-2xl text-black font-inter font-semibold ">
              Career Counselor
            </h1>
            <p className="text-black font-inter text-sm">
              Personal Career Counselor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICareerChat;
