import { Outlet } from "react-router-dom";
import SlidingSidebar from "./components/utility-components/SlidingSidebar";
import SearchHeader from "./components/utility-components/SearchHeader";

const MainLayout = () => {
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
