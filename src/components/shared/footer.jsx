import imgLogoLight from "../../assets/images/logo-light.jpg";
import imgLogoDark from "../../assets/images/logo-dark-rbg.png";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="p-2 sm:p-8 flex flex-wrap flex-row justify-around items-center gap-8 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-orange-700 dark:text-white">
        <div className="w-[36rem] flex flex-col gap-6">
          <img
            src={imgLogoLight}
            alt="Logo"
            className="w-12 h-12 dark:hidden"
          />
          <img
            src={imgLogoDark}
            alt="Logo"
            className="w-12 h-12 hidden dark:block"
          />
          <p className="text-xs sm:text-sm lg:text-base">
            شرکت تروسکه یکی از پیشگامان در حوزه برنامه‌نویسی وب است که با هدف
            ایجاد راه‌حل‌های نوآورانه و کاربرپسند در صنعت تکنولوژی فعالیت
            می‌کند. تیم تروسکه متشکل از افراد جوان، خلاق و پرانرژی است که با
            ترکیب تخصص‌های متنوع خود، به دنبال ارائه بهترین تجربه‌ها و تحقق
            اهداف بزرگ در زمینه طراحی و توسعه وب هستند.
          </p>
        </div>
        <ul className="w-auto flex flex-col gap-2 text-xs sm:text-sm lg:text-base">
          <li className="font-bold">لینک‌های کاربردی</li>
          <li className="cursor-pointer relative group">
            <span className="relative block overflow-hidden">
              <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-orange-500">
                <Link to="/about">درباره ما</Link>
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-orange-500 group-hover:scale-x-100 scale-x-0 origin-right transition-all duration-300"></span>
            </span>
          </li>
          <li className="cursor-pointer relative group">
            <span className="relative block overflow-hidden">
              <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-orange-500">
                <Link to="/bootcamps">دوره‌های بوت کمپ</Link>
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-orange-500 group-hover:scale-x-100 scale-x-0 origin-right transition-all duration-300"></span>
            </span>
          </li>
          <li className="cursor-pointer relative group">
            <span className="relative block overflow-hidden">
              <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-orange-500">
                <Link to="/contact">تماس باما</Link>
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-orange-500 group-hover:scale-x-100 scale-x-0 origin-right transition-all duration-300"></span>
            </span>
          </li>
        </ul>

        <ul className="w-auto flex flex-col gap-2 text-xs sm:text-sm lg:text-base">
          <li className="font-bold">اطلاعات تماس</li>
          <li className="relative group">
            <span className="relative block overflow-hidden">
              <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-orange-500">
                شماره تماس: 0873313245
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-orange-500 group-hover:scale-x-100 scale-x-0 origin-right transition-all duration-300"></span>
            </span>
          </li>
          <li className="relative group">
            <span className="relative block overflow-hidden">
              <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-orange-500">
                ایمیل: truskeh@gmail.com
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-orange-500 group-hover:scale-x-100 scale-x-0 origin-right transition-all duration-300"></span>
            </span>
          </li>
          <li className="relative group">
            <span className="relative block overflow-hidden">
              <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-orange-500">
                پاسخگویی: 8 صبح تا 6 عصر
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-orange-500 group-hover:scale-x-100 scale-x-0 origin-right transition-all duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
