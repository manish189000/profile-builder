import { GiArtificialHive } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const AIResponse = ({ response }) => {
  return (
    <div className="flex max-w-[90%] items-end my-2 gap-2 sm:gap-1">
      <GiArtificialHive className=" min-w-12 sm:min-w-3 text-scrlt text-5xl rounded-full p-2 sm:p-1" />
      <p className=" px-4 py-3 text-[15px] font-medium font-inter bg-oliv  rounded-3xl float-left ">
        {response}
      </p>
    </div>
  );
};

export default AIResponse;
