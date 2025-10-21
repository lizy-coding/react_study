import { useContext } from 'react';
import ParentComponent from './components/ParentComponent';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserProfile from './components/UserProfile';

// 创建一个包装组件来使用主题上下文
const AppContent = () => {
  const { currentThemeStyle } = useContext(ThemeContext);
  
  return (
    <UserProvider>
      <div style={{ 
        ...currentThemeStyle, 
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <h1>React Context / Props State </h1>
        <ThemeSwitcher />
        <UserProfile />
        <ParentComponent />
      </div>
    </UserProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
