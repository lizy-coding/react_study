import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserProfile from './components/UserProfile';
import ParentComponent from './components/ParentComponent';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <h1>React Context 和 Props 通信 Demo</h1>
          <ThemeSwitcher />
          <UserProfile />
          <ParentComponent />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
