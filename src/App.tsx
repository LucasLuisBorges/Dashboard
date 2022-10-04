import { BrowserRouter } from 'react-router-dom';
import { Theme } from './context/themeContext';
import { useTheme } from './hooks/useTheme';
import { Router } from './routes';
import './style/dark.scss';

export function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === Theme.dark ? 'dark' : ''}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
