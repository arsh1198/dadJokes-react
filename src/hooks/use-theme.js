import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export const theme = {
  LIGHT: {
    bg: "#A7BBC7",
    card: "#E1E5EA",
    button: "#de6e6d",
    text: "#626262",
    buttonText: "#E1E5EA",
  },

  DARK: {
    bg: "#1f1c28",
    card: "#333333",
    button: "#ff9c94",
    text: "#FAF3F3",
    buttonText: "#333333",
  },
};

export const useTheme = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  console.log("USE THEME => ", isDarkTheme);

  return isDarkTheme ? theme.DARK : theme.LIGHT;
};
