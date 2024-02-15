/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

export const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log("Really store: ", user);
  const [stateReload, setStateReload] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      return;
    }
    async function fetchUserData() {
      try {
        const request = await fetch(`http://localhost:8000/api/v1/user/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json", // Add other headers as needed
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
        const { user: response } = await request.json();
        setUser(response);
      } catch (error) {
        alert("Error fetching user data:");
      }
    }
    fetchUserData();
  }, [stateReload]);

  return (
    <MainContext.Provider value={{ user, setUser, setStateReload }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
