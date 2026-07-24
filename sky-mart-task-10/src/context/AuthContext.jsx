import { children, createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [logedInUser, setLogedInUser] = useState(
    JSON.parse(localStorage.getItem("logedInUser")),
  );

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        logedInUser,
        setLogedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
