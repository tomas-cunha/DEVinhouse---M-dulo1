import { CustomThemeContext } from "./CustomThemeContext";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getThemeLS, setThemeLS } from "../../utils";
import { themeDark, themeLight } from "../../themes";

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const customTheme = getThemeLS();
    if (customTheme) setTheme(customTheme);
  }, []);

  const handleTheme = () => {
    setTheme((prev) => {
      const newValue = prev === "dark" ? "light" : "dark";
      setThemeLS(newValue);
      return newValue;
    });
  };

  const customTheme = theme === "dark" ? themeDark : themeLight;

  return (
    <CustomThemeContext.Provider value={{ theme: customTheme, handleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
