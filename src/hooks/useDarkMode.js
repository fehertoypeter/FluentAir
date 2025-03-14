import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
