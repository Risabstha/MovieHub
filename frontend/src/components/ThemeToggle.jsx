import React from "react";
import { useTheme } from "../stores/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full  "
    >
      {theme === "dark" ? <FaSun className="text-yellow-400 "/> : <FaMoon className="text-gray-900"/>}
    </button>
  );
};

export default ThemeToggle;
