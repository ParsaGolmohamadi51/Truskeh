import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import imgLogoDark from "../../assets/images/logo-long-dark-removebg.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full p-3 md:p-5 flex justify-between items-center text-[#136E22] dark:text-white relative">
      {/* دکمه باز و بسته کردن منو */}
      <button
        className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700 transition-transform duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          // آیکون ضربدر وقتی منو باز است
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform duration-300 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // آیکون منو وقتی بسته است
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        )}
      </button>

      <div className="flex items-center gap-8">
        {/* لوگو */}
        <div className="flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:static">
          <img
            src={imgLogoDark}
            className="w-auto h-12 block dark:hidden md:w-auto"
            alt="Light Logo"
          />
          <img
            src={imgLogoDark}
            className="w-auto h-12 hidden dark:block md:w-auto"
            alt="Dark Logo"
          />
        </div>

        {/* منو */}
        <nav
          className={`absolute top-16 right-0 bg-[#0a473e] shadow-lg p-5 flex flex-col gap-3 rounded-l-xl w-auto transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform md:static md:flex-row md:translate-x-0 md:bg-transparent md:shadow-none md:p-0 md:flex`}
        >
          {[
            { to: "/", label: "خانه" },
            { to: "/bootcamps", label: "بوت‌کمپ‌ها" },
            { to: "/products", label: "محصولات" },
            { to: "/order", label: "سفارش سایت" },
            { to: "/about", label: "درباره ما" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative group transition-all duration-300 overflow-hidden px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative block transition-colors duration-300 group-hover:text-green-500 dark:group-hover:text-orange-500">
                {label}
              </span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-500 dark:bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* آیکون کاربر + تغییر تم */}
      <div className="flex gap-2">
        <Link className="group"></Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
