/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ این گزینه باید تنظیم شده باشد
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      direction: {
        rtl: "rtl",
      },
    },
  },
  plugins: [],
};
