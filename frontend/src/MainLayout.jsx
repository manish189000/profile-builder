import { Outlet, useNavigate } from "react-router-dom";
import SlidingSidebar from "./components/utility-components/SlidingSidebar";
import SearchHeader from "./components/utility-components/SearchHeader";
import { useEffect, useContext } from "react";
import { MainContext } from "./store/MainContext";

const MainLayout = () => {
  const { user } = useContext(MainContext);
  const navigate = useNavigate();
  // const isEmptyObject = (obj) => {
  //   return Object.keys(obj).length === 0;
  // };
  // useEffect(() => {
  //   if (isEmptyObject(user)) {
  //     console.log("Not authorized");
  //     navigate("/auth");
  //   }
  // }, [user, navigate]);

  return (
    <div className="flex h-dvh air:flex-col">
      <SlidingSidebar />
      <div className="w-full h-full overflow-x-hidden overflow-y-auto no-scrollbar">
        <SearchHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
