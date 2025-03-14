// TopBarContext.js
import React, { createContext, useState } from "react";

export const TopBarContext = createContext();

export const TopBarProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  return (
    <TopBarContext.Provider value={{ content, setContent }}>
      {children}
    </TopBarContext.Provider>
  );
};
