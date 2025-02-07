import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'accessible';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Detect if we're running in the browser
const isBrowser = typeof window !== 'undefined';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light'); // Default to light theme

  // Move initialization logic to useEffect to avoid SSR issues
  useEffect(() => {
    if (isBrowser) {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    }
  }, []);

  useEffect(() => {
    if (isBrowser) {
      // Remove previous theme classes
      document.documentElement.classList.remove('light', 'dark', 'accessible');
      // Add new theme class
      document.documentElement.classList.add(theme);
      // Save to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}