import { useState, useEffect, createContext } from "react";

export const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      return;
    }
    async function fetchUserData() {
      try {
        const request = await fetch(
          `http://localhost:8000/api/v1/user/verify/${localStorage.getItem(
            "jwt"
          )}`
        );
        const response = await request.json();
        setUser(response);
      } catch (error) {
        alert("Error fetching user data:");
      }
    }
    fetchUserData();
  }, []);

  return (
    <MainContext.Provider value={{ user, setUser }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
