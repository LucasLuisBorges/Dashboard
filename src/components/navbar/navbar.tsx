import './navbar.scss';
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from '@mui/icons-material';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/themeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item" onClick={toggleTheme}>
            {theme === Theme.dark ? (
              <DarkModeOutlined className="icon" />
            ) : (
              <LightModeOutlined className="icon" />
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://github.com/LucasLuisBorges.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
