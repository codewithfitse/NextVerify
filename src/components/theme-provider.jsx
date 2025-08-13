import { createContext, useContext, useEffect, useState } from "react";
import Toast from "./ui/toast";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Use saved theme, fallback to system preference, then light
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    // Apply theme immediately
    applyTheme(initialTheme);
  }, []);

  // Keyboard shortcut for theme toggle (Ctrl/Cmd + T)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "t") {
        event.preventDefault();
        toggleTheme();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [theme]);

  const applyTheme = (newTheme) => {
    // Remove both classes first
    document.documentElement.classList.remove("light", "dark");
    // Add the new theme class
    document.documentElement.classList.add(newTheme);
    // Set data attribute for additional styling
    document.documentElement.setAttribute("data-theme", newTheme);

    // Update document title with theme indicator
    const currentTitle = document.title.replace(/\[.*?\]/, "").trim();
    document.title = `${currentTitle} [${newTheme === "dark" ? "🌙" : "☀️"}]`;
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);

    // Show toast notification
    setToastMessage(`Switched to ${newTheme} mode`);
    setShowToast(true);

    // Log for debugging
    console.log("Theme changed to:", newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
