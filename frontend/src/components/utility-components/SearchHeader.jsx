import { IoSearchOutline } from "react-icons/io5";

const SearchHeader = () => {
  return (
    <div className="w-full px-4 py-3 border-b-gray-200 border-b">
      <div className="searchbar relative">
        <IoSearchOutline className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-6 text-xl" />
        <input
          className=" text-base w-80 outline-none border rounded-3xl py-3 pr-5 pl-10"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchHeader;
