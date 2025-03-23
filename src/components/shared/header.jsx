import { Link } from "react-router-dom";
import Button from "../ui/button";

const Header = () => {
  return (
    <header className="w-full p-5 flex justify-between items-center shadow-md">
      <div className="flex justify-center items-center">
        <span className="ml-4">Logo</span>
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
      <form class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border-b border-gray-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600
         focus:outline-none focus:ring-0 focus:gray-blue-500"
          placeholder="جستجو..."
        />
      </form>
      <div>
        <Button className="ml-4" variant="outline" size="medium">
          ورود
        </Button>
        <Button variant="primary" size="medium">
          ثبت نام
        </Button>
      </div>
    </header>
  );
};

export default Header;
