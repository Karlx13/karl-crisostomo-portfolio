import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) throw new Error('UseTheme must be used inside ThemeProvider');
  return ctx;
};
