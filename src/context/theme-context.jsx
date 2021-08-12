import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const current = localStorage.getItem("darkTheme") === "1" ? true : false;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkTheme", isDarkTheme ? 0 : 1);
  }, [isDarkTheme]);

  const value = { isDarkTheme, setIsDarkTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
