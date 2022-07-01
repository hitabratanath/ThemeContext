import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const handleToggleDark = () => {
    setIsDark((curDark) => !curDark);
  };
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleDark: handleToggleDark }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
