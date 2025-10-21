import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

// 定义主题对应的背景色
const themeStyles = {
  light: {
    backgroundColor: '#f8f9fa',
    color: '#212529'
  },
  dark: {
    backgroundColor: '#343a40',
    color: '#f8f9fa'
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 获取当前主题的样式
  const currentThemeStyle = themeStyles[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles, currentThemeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};
