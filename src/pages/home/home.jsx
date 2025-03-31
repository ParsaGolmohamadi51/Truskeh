import TextSection from "../../components/TextSection";
import ActivityCard from "../../components/ui/ActivityCard";
import PersonalCard from "../../components/ui/PersonnelCard";
import imgWeb from "../../assets/images/web.jpg";
import imgGame from "../../assets/images/game.jpg";
import imgBootcamp from "../../assets/images/bootcamp.jpg";
import imgCreate from "../../assets/images/create.jpg";
import personalParsa from "../../assets/images/personal-img/parsaImg.png";

const Home = () => {
  return (
    <>
      <div className="p-4 sm:p-14 flex flex-col gap-10 dark:text-white">
        <TextSection
          title={<h4>شرکت فناوری هوشمند تروسکه راد</h4>}
          text={
            <p className="w-full sm:w-[90%]">
              شرکت تروسکه یک مجموعه پیشرو در حوزه فناوری است که با تمرکز بر
              توسعه نرم‌افزارهای تحت وب، استارتاپ‌های بازی‌سازی، و آموزش تخصصی،
              تلاش می‌کند تا استانداردهای جدیدی در صنعت برنامه‌نویسی و گیمینگ
              تعریف کند. ما با بهره‌گیری از تیمی مجرب و خلاق، خدمات متنوعی از
              جمله طراحی و توسعه وب‌سایت‌های حرفه‌ای، پیاده‌سازی سیستم‌های تحت
              وب، و ارائه راهکارهای نوین دیجیتال را به مشتریان خود ارائه
              می‌دهیم. علاوه بر خدمات توسعه نرم‌افزار، یکی از مأموریت‌های اصلی
              ما، آموزش و توانمندسازی افراد مستعد در حوزه فناوری است. به همین
              منظور، با برگزاری بوت‌کمپ‌های تخصصی در زمینه‌های مختلف
              برنامه‌نویسی و علوم کامپیوتر، به جذب و پرورش کارآموزان می‌پردازیم
              تا آنان را برای ورود به بازار کار آماده کنیم. همچنین، تروسکه با
              فراهم‌سازی بستری برای ثبت سفارش و طراحی وب‌سایت‌های اختصاصی، امکان
              ارائه راهکارهای سفارشی‌سازی‌شده برای کسب‌وکارهای مختلف را فراهم
              می‌کند. از استارتاپ‌های نوپا گرفته تا شرکت‌های بزرگ، ما در کنار
              شما هستیم تا بهترین راه‌حل‌های دیجیتالی را متناسب با نیازهای شما
              ارائه دهیم. با ما همراه شوید تا در مسیر پیشرفت، نوآوری و تحول
              دیجیتال، گام‌های مؤثری بردارید.
            </p>
          }
        />
        <TextSection
          title={<h4>حوزه های فعالیت</h4>}
          text={
            <div className="flex flex-row justify-evenly flex-wrap gap-y-10 gap-x-4">
              <ActivityCard
                img={imgWeb}
                title="برنامه نویسی وب"
                text="برنامه‌نویسی وب شامل طراحی و توسعه وب‌سایت‌ها و برنامه‌های تحت وب است. این حوزه به دو بخش فرانت‌اند (توسعه رابط کاربری) و بک‌اند (مدیریت داده و منطق سرور) تقسیم می‌شود. هدف اصلی، ایجاد وب‌سایت‌های سریع، امن و کاربرپسند است که نیازهای کاربران و کسب‌وکارها را برآورده کند."
              />
              <ActivityCard
                img={imgGame}
                title="استارتاپ های گیم"
                text="استارتاپ‌های گیم بر توسعه و انتشار بازی‌های دیجیتال خلاقانه تمرکز دارند. این استارتاپ‌ها با بهره‌گیری از تکنولوژی‌های مدرن و ایده‌های نوآورانه، تجربه‌های جذاب و تعاملی برای بازیکنان ایجاد می‌کنند. هدف اصلی، ساخت بازی‌های سرگرم‌کننده و درآمدزا در بازار رقابتی گیمینگ است."
              />
              <ActivityCard
                img={imgBootcamp}
                title="آموزش و بوت‌کمپ‌های برنامه‌نویسی"
                text="آموزش و بوت‌کمپ‌های برنامه‌نویسی دوره‌های فشرده و عملی برای یادگیری مهارت‌های برنامه‌نویسی و فناوری هستند. این بوت‌کمپ‌ها به افراد کمک می‌کنند تا در مدت کوتاه، مهارت‌های لازم برای ورود به بازار کار را کسب کنند. تمرکز اصلی روی پروژه‌های عملی، حل مسائل واقعی و آماده‌سازی برای مشاغل فنی است."
              />
              <ActivityCard
                img={imgCreate}
                title="طراحی سایت اختصاصی برای مشتریان"
                text="طراحی سایت اختصاصی برای مشتریان به کسب‌وکارها این امکان را می‌دهد که وب‌سایتی متناسب با نیازها و هویت برند خود داشته باشند. این خدمات شامل طراحی رابط کاربری، توسعه فنی، بهینه‌سازی سئو و پیاده‌سازی ویژگی‌های سفارشی است تا تجربه‌ای حرفه‌ای و منحصربه‌فرد برای کاربران فراهم شود."
              />
            </div>
          }
        />
      </div>
      <div className="sm:pb-14 sm:px-14 pb-4 px-4">
        <TextSection
          title={"اعضای اصلی شرکت"}
          className="dark:text-white mt-8 sm:mt-0"
        />
        <div className="flex flex-row flex-wrap gap-6 justify-center ">
          <PersonalCard
            img={personalParsa}
            name={"پارسا گلمحمدی"}
            description={"برنامه نویس سینیور فرانت اند"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
          <PersonalCard
            img={personalParsa}
            name={"پارسا گلمحمدی"}
            description={"برنامه نویس سینیور فرانت اند"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
          <PersonalCard
            img={personalParsa}
            name={"پارسا گلمحمدی"}
            description={"برنامه نویس سینیور فرانت اند"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
          <PersonalCard
            img={personalParsa}
            name={"پارسا گلمحمدی"}
            description={"برنامه نویس سینیور فرانت اند"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
          <PersonalCard
            img={personalParsa}
            name={"پارسا گلمحمدی"}
            description={"برنامه نویس سینیور فرانت اند"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
