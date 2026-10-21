// src/components/ThemeToggle.jsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle color theme"
        className="p-2 rounded-lg bg-transparent border border-primary/10 dark:border-white/10 transition"
        disabled
      />
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      data-cursor="pointer"
      className="p-2 rounded-lg border border-primary/15 dark:border-accent/15 hover:bg-primary/10 dark:hover:bg-accent/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-accent" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-primary" aria-hidden="true" />
      )}
    </button>
  );
}
