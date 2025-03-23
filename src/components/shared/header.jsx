import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="w-full p-5 flex justify-between items-center shadow-md bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex justify-center items-center">
        <span className="ml-4">Logo</span>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <Link to="/" className="ml-4">
            خانه
          </Link>
          <Link to="/bootcamps" className="ml-4">
            بوت کمپ ها
          </Link>
          <Link to="/about" className="ml-4">
            درباره ما
          </Link>
        </div>
      </div>
      <div className="flex">
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 p-2 ml-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
