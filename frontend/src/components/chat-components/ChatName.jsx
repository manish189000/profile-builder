/* eslint-disable react/prop-types */
import { IoMdChatbubbles } from "react-icons/io";

const ChatName = ({ title }) => {
  return (
    <div className="w-full border-b-[1px] px-3 py-6">
      <div className="w-full flex items-center">
        <IoMdChatbubbles className="min-w-[15%] w-12 text-2xl" />
        <div className="w-[75%]">
          <p className=" overflow-hidden text-ellipsis whitespace-nowrap font-inter text-sm  truncate">
            {title}
          </p>
          <p className="font-inter text-[12px]">22 hrs ago</p>
        </div>
      </div>
    </div>
  );
};

export default ChatName;
