import { Outlet, useNavigate } from "react-router-dom";
import SlidingSidebar from "./components/utility-components/SlidingSidebar";
import SearchHeader from "./components/utility-components/SearchHeader";
import { useEffect } from "react";

const MainLayout = () => {
  // const { user } = useContext(MainContext);
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      navigate("/auth");
      return; // Add a return statement to avoid unnecessary fetch
    }

    async function getUser() {
      try {
        const request = await fetch(
          `http://localhost:8000/api/v1/user/verify/${jwt}`
        );
        const { user: response } = await request.json();

        if (response.status === "fail" || response.status === "error") {
          navigate("/auth");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    getUser();
  }, [navigate]);

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
