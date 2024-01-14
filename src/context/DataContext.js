import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    console.log("context", currUser);
  }, [currUser]);

  return (
    <DataContext.Provider
      value={{
        setCurrUser,
        currUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
