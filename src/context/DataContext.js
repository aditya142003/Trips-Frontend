import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        setData,
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
