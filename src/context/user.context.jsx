import { createContext } from "react";

//actual value wew want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  return <UserContext.Provider></UserContext.Provider>;
};
