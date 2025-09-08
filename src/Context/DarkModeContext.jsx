// DarkModeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Load saved mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDark(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => {
      localStorage.setItem("dark-mode", !prev);
      return !prev;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
