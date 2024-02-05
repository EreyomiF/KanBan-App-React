// ThemeProvider.jsx
import React, { useState, useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage or other preferences to set initial dark mode state
    const storedDarkMode = localStorage.getItem('color-theme') === 'dark';
    setIsDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    // Update class on documentElement when dark mode changes
    document.documentElement.classList.toggle('dark', isDarkMode);

    // Save dark mode preference in localStorage
    localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`transition-all ${isDarkMode ? 'dark' : ''}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {children}
    </div>
  );
};

export default ThemeProvider;
