const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen py-12 px-6 sm:px-16 flex flex-col items-center">
      <section className="max-w-4xl text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-600 dark:text-orange-500 mb-4">
          درباره تروسکه
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          تروسکه یک شرکت پیشرو در زمینه برنامه‌نویسی وب، استارتاپ‌های گیم و
          برگزاری بوت‌کمپ‌های تخصصی است. ما با هدف رشد استعدادهای دیجیتال و
          ارائه خدمات نوآورانه در صنعت فناوری اطلاعات فعالیت می‌کنیم.
        </p>
      </section>

      <section className="mt-12 w-full max-w-5xl text-center">
        <h2 className="text-2xl font-bold mb-6">ارزش‌های ما</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "نوآوری",
              desc: "ما همواره در جستجوی راهکارهای خلاقانه برای چالش‌های جدید هستیم.",
              icon: "🚀",
            },
            {
              title: "تیم‌محوری",
              desc: "ما به کار گروهی و رشد متقابل اعضای تیم اهمیت می‌دهیم.",
              icon: "🤝",
            },
            {
              title: "تعهد به کیفیت",
              desc: "کیفیت در ارائه خدمات و محصولات اولویت ماست.",
              icon: "✅",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center"
            >
              <div className="text-3xl">{value.icon}</div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-4xl text-center">
        <h2 className="text-2xl sm:text-2xl font-bold mb-6">حوزه‌های فعالیت</h2>
        <ul className="space-y-4 text-lg">
          <li>🚀 طراحی و توسعه وب‌سایت‌های مدرن</li>
          <li>🎮 توسعه و انتشار بازی‌های دیجیتال</li>
          <li>🎓 برگزاری بوت‌کمپ‌های آموزشی</li>
        </ul>
      </section>

      <section className="mt-12 max-w-4xl text-center bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-3xl font-bold text-green-600 dark:text-orange-500 mb-4">
          همکاری با ما
        </h2>
        <p className="text-base">فرصت همکاری در قالب‌های زیر وجود دارد:</p>
        <ul className="text-base mt-4 space-y-2">
          <li>✅ استخدام در تیم تروسکه</li>
          <li>💰 سرمایه‌گذاری روی پروژه‌های نوآورانه</li>
          <li>🤝 شراکت در استارتاپ‌های فناوری</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
