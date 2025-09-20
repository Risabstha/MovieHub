import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// custom hook for convenience
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // jaba page reload hunxa taba localstorage bata theme lai state ma set garxa
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"    // dark mode || light mode
  );

  // apply theme to <html> tag
  useEffect(() => {
    localStorage.setItem("theme", theme); // persist between reloads
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


