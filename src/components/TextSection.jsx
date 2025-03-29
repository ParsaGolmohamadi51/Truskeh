const TextSection = ({
  title,
  text,
  className = "",
  titleClass = "",
  textClass = "",
  icon,
}) => {
  return (
    <section className={`mb-1 ${className}`}>
      <div className="flex items-center gap-2">
        {icon && <span className="text-2xl">{icon}</span>}
        <h4
          className={`text-base sm:text-lg lg:text-xl ${titleClass}`}
        >
          {title}
        </h4>
      </div>
      <p className={`text-xs sm:text-sm lg:text-base mt-4 ${textClass}`}>
        {text}
      </p>
    </section>
  );
};

export default TextSection;

// نحوه استفاده از این کامپوننت
{
  /* <TextSection
  title="درباره ما"
  text="تروسکه یک آکادمی آموزشی است که به علاقه‌مندان برنامه‌نویسی کمک می‌کند تا مهارت‌های خود را به سطح حرفه‌ای برسانند. هدف ما ارائه آموزش‌های کاربردی و پروژه‌محور است."
  className="bg-blue-100 p-6 rounded-lg"
  titleClass="text-blue-600"
  textClass="text-gray-700"
/> */
}
