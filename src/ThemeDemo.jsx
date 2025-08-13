import React from "react";
import { setThemeColors } from "./theme";

const ThemeDemo = () => {
  const themes = [
    {
      name: "Gold Theme",
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#ffd700",
      accentDark: "#b8860b",
    },
    {
      name: "Blue Theme",
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#3b82f6",
      accentDark: "#1d4ed8",
    },
    {
      name: "Purple Theme",
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#8b5cf6",
      accentDark: "#6d28d9",
    },
    {
      name: "Green Theme",
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#10b981",
      accentDark: "#059669",
    },
  ];

  const handleThemeChange = (theme) => {
    setThemeColors(theme, "light");
    console.log(`Applied ${theme.name}`);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-card border border-border rounded-lg p-4 shadow-lg">
      <h3 className="text-foreground font-bold mb-3">Theme Switcher</h3>
      <div className="space-y-2">
        {themes.map((theme, index) => (
          <button
            key={index}
            onClick={() => handleThemeChange(theme)}
            className="w-full px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors"
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeDemo;
