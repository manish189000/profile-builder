import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
const GeneralAIChatPage = () => {
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
          AI Chat Bot
        </h1>
        {/* <p className="text-sm text-gray-300 font-inter py-2">
          Provide us with a snapshot of your key details, and our AI will craft
          a tailored resume just for you.
        </p> */}
      </div>

      <div className="mainContainer w-full px-4 py-3 border-b-gray-200 border-b bg-emerald-200 flex">
        <div
          className="leftContainer w-[30%] border-black border
         bg-slate-300 py-3 px-3 rounded-l-md"
        >
          <div className="search">
            {/* <div className=" px-4 py-3 w-full border-b-gray-200 border-b">
              <div className="searchbar relative">
                <IoSearchOutline className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-6 text-xl" />
                <input
                  className=" text-base outline-none border rounded-3xl py-3 pr-5 pl-10"
                  placeholder="Search"
                />
              </div>
            </div> */}
            <div className="inputBox relative w-[full] bg-white flex rounded-3xl p-2.5 border border-black">
              <input
                type="text"
                className=" w-full relative rounded-3xl outline-none pl-6 text-lg"
                placeholder="Search"
              />
              <IoSearchOutline className="text-xl absolute top-[34%] left-2.5" />
            </div>
          </div>
        </div>
        <div className="rightContainer w-[70%] border-black border bg-red-300 py-3 px-3 rounded-r-md">
          sfsfgsfgfge
        </div>
      </div>
    </>
  );
};

export default GeneralAIChatPage;
