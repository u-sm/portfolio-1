// src/components/ThemeToggle.jsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only mark as mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid mismatches: render nothing (or a static placeholder) on first render
  if (!mounted) {
    return (
      <button
        aria-label="Toggle Dark Mode"
        className="p-2 rounded-full bg-slateLight dark:bg-slateDark shadow-lg-soft transition"
      >
        {/* you could render a generic icon here, or leave empty */}
      </button>
    );
  }

  // Determine which icon to show
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <button
          aria-label="Toggle Dark Mode"
          data-cursor="pointer"
      className="
        p-2 rounded-full 
        bg-slateLight dark:bg-slateDark 
        shadow-lg-soft hover:scale-105 transition
      "
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-slateLight" />
      ) : (
        <Moon className="w-5 h-5 text-slateDark" />
      )}
    </button>
  );
}
