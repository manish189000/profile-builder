/* eslint-disable react/prop-types */
import { IoMdChatbubbles } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { MainContext } from "../../store/MainContext";

const ChatName = ({ title, setSelectedConversation, id, setErrorVisible }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [errorVisible, setErrorVisible] = useState(false);
  const { setStateReload } = useContext(MainContext);

  function handleError(error) {
    setErrorVisible(true);
    console.error("Error deleting chat:", error);

    // Hide the error after 3 seconds
    setTimeout(() => {
      setErrorVisible(false);
    }, 3000);
  }
  async function handleDeleteConversation() {
    try {
      const request = await fetch(
        `http://localhost:8000/api/v1/conversation/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      const response = await request.json();
      if (response.status === "error") {
        console.log(response);
        setErrorVisible(true);
        setTimeout(() => {
          setErrorVisible(false);
        }, 3000);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (response.status === "success") {
        setStateReload(Math.random());
      }
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <div
      onClick={() => setSelectedConversation(id)}
      className="chat-container w-full cursor-pointer bg-white border-b-[1px] px-2 py-5 hover:bg-gray-100 md:hover:bg-white"
    >
      {/* <BsThreeDots className="three-dots absolute top-[50%] -translate-y-[50%] right-10 text-xl" /> */}
      <div className="w-full flex items-center">
        <IoMdChatbubbles className="min-w-[15%] w-12 text-2xl" />
        <div className="w-[75%]">
          <p className=" overflow-hidden text-ellipsis whitespace-nowrap font-inter text-sm  truncate">
            {title}
          </p>
          <p className="font-inter text-[12px]">22 hrs ago</p>
        </div>
        <div className="relative three-dots w-8 min-w-[10%]">
          <BsThreeDots
            className="text-xl "
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div
              className={`${
                dropdownOpen
                  ? "transition-all ease-out duration-300 transform opacity-100 scale-100"
                  : "transition-all ease-in duration-150 transform opacity-0 scale-95"
              } origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <p className="block font-inter cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span className="flex gap-2 items-center justify-start">
                    <FaPen />
                    Rename
                  </span>
                </p>
                <p
                  onClick={handleDeleteConversation}
                  href="#"
                  className="block font-inter px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <span className="flex gap-2 -ml-1 text-red-600 items-center justify-start">
                    <MdDelete className="text-xl text-red-600" /> Delete
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatName;
