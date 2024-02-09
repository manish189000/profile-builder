import { useState } from "react";
import { useEffect } from "react";

const DashboardPage = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/v1/user/verify/${localStorage.getItem("jwt")}`
    )
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);
  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex justify-between items-center lg:flex-col lg:items-start lg:py-6">
        <div>
          <p className="text-sm font-inter text-black">User dashboard</p>
          <h1 className=" py-4 text-3xl text-black font-inter font-bold">
            Welcome, {userInfo?.user?.name || "Muzammil"}.
          </h1>
        </div>
        <div>
          <div className="flex gap-5 lg:-ml-[2px]">
            <button className="text-base w-40 outline-none rounded-3xl py-2 px-2 shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 ">
              View documents
            </button>
            <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 ">
              Create new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
