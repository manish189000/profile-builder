import { FiPlus } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
const GeneratedContentPage = () => {
  return (
    <>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex justify-between items-center">
        <div className="innerContainer">
          <div className="flex gap-1 items-center text-black">
            <Link to={`/dashboard`}>
              <IoIosArrowRoundBack />
            </Link>
            <Link to={`/dashboard`}>
              <p className="text-sm font-inter text-black">Back to dashboard</p>
            </Link>
          </div>
          <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
            My Documents
          </h1>
        </div>
        <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 sm:w-40 flex items-center justify-center gap-2">
          <FiPlus /> New Folder
        </button>
      </div>
      {/* ////////////////////////////////////////////////////////////// */}
      <div className="buttonSection px-4 py-4 border-b-gray-200 border-b flex gap-4 air:flex-wrap">
        <Button
          colorScheme="#a45848"
          className="text-scrlt bg-none hover:bg-dbeige"
          paddingX="1.5rem"
          border="none"
          fontWeight="600"
          variant="outline"
          borderRadius="30px"
        >
          All Documents
        </Button>
        <Button
          colorScheme="#a45848"
          className="text-scrlt bg-none hover:bg-dbeige"
          paddingX="1.5rem"
          border="none"
          fontWeight="600"
          variant="outline"
          borderRadius="30px"
        >
          Resumes
        </Button>
        <Button
          colorScheme="#a45848"
          className="text-scrlt bg-none hover:bg-dbeige"
          paddingX="1.5rem"
          border="none"
          fontWeight="600"
          variant="outline"
          borderRadius="30px"
        >
          Re-Written Resumes
        </Button>
        <Button
          colorScheme="#a45848"
          className="text-scrlt bg-none hover:bg-dbeige"
          paddingX="1.5rem"
          border="none"
          fontWeight="600"
          variant="outline"
          borderRadius="30px"
        >
          Cover letters
        </Button>
      </div>
      {/* ///////////////////////////////////////////////////// */}
      <div className="content-container px-4 py-4 border-b-gray-200 border-b bg-oliv"></div>
    </>
  );
};

export default GeneratedContentPage;
