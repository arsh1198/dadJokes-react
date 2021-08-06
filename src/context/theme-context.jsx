import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log(isDarkTheme);
  useEffect(() => {
    localStorage.setItem("darkTheme", isDarkTheme === "1" ? "0" : "1");
  }, [isDarkTheme]);

  const value = { isDarkTheme, setIsDarkTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
