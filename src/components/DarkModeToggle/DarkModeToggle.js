import { useDarkMode } from "../../hooks/useDarkMode";
import { Icons } from "../../assets/icons/icons";
import "./DarkModeToggle.css";
import "../Switch/Switch.css";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="switch-container dark-mode-toggle">
      <Icons.GoSun className="dark-mode-sun" />
      <label className="switch">
        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
        <span className="slider round"></span>
      </label>
      <Icons.GoMoon className="dark-mode-moon" />
    </div>
  );
}
