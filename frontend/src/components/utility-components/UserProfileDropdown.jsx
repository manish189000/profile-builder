import { useState } from "react";
import { PiStarFourBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const UserProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  function logoutHandler() {
    navigate("/");
    localStorage.removeItem("jwt");
  }
  return (
    <div className="relative inline-block air:hidden ">
      <div className="flex items-center">
        <div
          className=" bg-pink-400 text-white px-4 py-4 text-2xl rounded-full overflow-hidden cursor-pointer bg-gradient-to-r from-indigo-900 via-lime-300 to-rose-600"
          onClick={toggleDropdown}
        >
          <PiStarFourBold />
        </div>
      </div>
      {dropdownOpen && (
        <div
          className={`${
            dropdownOpen
              ? "transition-all ease-out duration-300 transform opacity-100 scale-100"
              : "transition-all ease-in duration-150 transform opacity-0 scale-95"
          } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p
              onClick={logoutHandler}
              className="block font-inter cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </p>

            <p
              href="#"
              className="block font-inter px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </p>
            <p
              href="#"
              className="block font-inter px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
