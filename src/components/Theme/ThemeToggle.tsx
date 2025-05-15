"use client";

import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-text-secondary dark:text-text-neutral hover:bg-bg-secondary dark:hover:bg-bg-accent1 hover:text-text-primary dark:hover:text-text-light rounded-full transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transform rotate-0 transition-transform duration-500" />
      ) : (
        <Moon className="h-5 w-5 transform rotate-180 transition-transform duration-500" />
      )}
    </Button>
  );
}