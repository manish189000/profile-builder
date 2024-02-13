import { GiArtificialHive } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const AIResponse = ({ response }) => {
  return (
    <div className="flex items-end my-4 gap-2">
      <GiArtificialHive className=" min-w-12 text-scrlt text-5xl rounded-full p-2" />
      <p className=" px-4 py-3 text-base bg-oliv  rounded-3xl float-left ">
        {response}
      </p>
    </div>
  );
};

export default AIResponse;
