import TextSection from "../../components/TextSection";
import ActivityCard from "../../components/ui/ActivityCard";
import PersonalCard from "../../components/ui/PersonnelCard";
import imgWeb from "../../assets/images/web.jpg";
import imgGame from "../../assets/images/game.jpg";
import imgBootcamp from "../../assets/images/bootcamp.jpg";
import imgCreate from "../../assets/images/create.jpg";
import personalParsa from "../../assets/images/personal-img/parsa.png";
import personalZanko from "../../assets/images/personal-img/zanko.png";
import PersonnelYashar from "../../assets/images/personal-img/yashar.png";
import PersonnelEhsan from "../../assets/images/personal-img/ehsan.png";
import PersonnelNima from "../../assets/images/personal-img/nima.png";
import PersonnelMazyar from "../../assets/images/personal-img/mazyar.png"
import gifAI from "../../assets/images/GIFs/videoAI.mp4";

const Home = () => {
  return (
    <>
      <div className="p-4 sm:p-14 flex flex-col gap-10 dark:text-white">
        <div className="flex items-center justify-between sm:flex-row flex-col">
          <video
            src={gifAI}
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-1/3"
          >
          </video>

          <div className="flex flex-col mt-4 sm:w-1/2">
            <h4 className="text-[#EBFC05] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center sm:text-left">
              Truskeh
            </h4>
            <h4 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center sm:text-right">
              Company
            </h4>
          </div>
        </div>
        <TextSection
          className="mt-7"
          title={<h4>حوزه های فعالیت</h4>}
          text={
            <div className="flex flex-row justify-evenly flex-wrap gap-y-10 gap-x-4 mt-4">
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
        <div className="flex flex-row flex-wrap gap-6 justify-around">
          <PersonalCard
            img={PersonnelMazyar}
            name={"مازیار بهمنی"}
            description={"عضوبنیان نخبگان محقق CV و NLP"}
            position="بک اند و امنیت سایت"
            email={"mazyar1199@gmail.com"}
          />
          <PersonalCard
            img={personalParsa}
            name={"پارسا گلمحمدی"}
            description={"مدیر فرانت اند و تستر پروژه"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
          <PersonalCard
            img={PersonnelEhsan}
            name={"احسان مرادی"}
            description={"مشاور طراحی سایت"}
            position="فرانت اند"
            email={"ehsanmoradi0086@gmail.com"}
          />
          <PersonalCard
            img={personalZanko}
            name={"زانکو احمدپناه"}
            description={"بهینه موتورهای جستجو"}
            position="وردپرس و سئو"
            email={"zankozsrh@gmail.com"}
          />
          <PersonalCard
            img={PersonnelYashar}
            name={"یاشار حاجی میرزایی"}
            description={"دیزاینر وب و اپلیکیشن"}
            position="UI/UX"
            email={"phajemirzaeey@gmail.com"}
          />
          <PersonalCard
            img={PersonnelNima}
            name={"نیما سعیدی"}
            description={"توسعه پروژه های فرانت اند"}
            position="فرانت اند"
            email={"parsa.jobs.gol"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
