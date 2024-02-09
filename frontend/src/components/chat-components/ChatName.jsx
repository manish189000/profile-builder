/* eslint-disable react/prop-types */
import { IoMdChatbubbles } from "react-icons/io";

const ChatName = ({ title }) => {
  return (
    <div className="w-full border-b-[1px] px-3 py-6">
      <div className="w-full flex items-center">
        <IoMdChatbubbles className="min-w-[15%] text-2xl" />
        <div>
          <p className="w-[65%] font-inter text-sm  truncate text-ellipsis">
            {title}
          </p>
          <p className="font-inter text-[12px]">22 hrs ago</p>
        </div>
      </div>
    </div>
  );
};

export default ChatName;
