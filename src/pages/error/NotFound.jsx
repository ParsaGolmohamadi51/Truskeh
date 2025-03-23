import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-300 text-center">
      <h1 className="text-9xl font-extrabold text-gray-800 animate-bounce">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">صفحه مورد نظر یافت نشد!</p>
      <p className="text-gray-500 mt-2 max-w-md">
        ممکن است صفحه حذف شده باشد یا آدرس را اشتباه وارد کرده باشید.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
