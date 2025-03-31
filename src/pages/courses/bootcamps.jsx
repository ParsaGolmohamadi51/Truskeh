import Card from "../../components/ui/BootcampCard";
import TextSection from "../../components/TextSection";
import imgFrontEnd from "../../assets/images/Front-End.jpg";
import imgBackEnd from "../../assets/images/Back-End.jpg";
import imgSEO from "../../assets/images/SEO.jpg";
import imgUI from "../../assets/images/UI.jpg";
import imgICDL from "../../assets/images/ICDL.jpg";
import imgWordPress from "../../assets/images/Word-Press.jpg";

const bootcampData = [
  {
    img: imgFrontEnd,
    title: "Front End",
    text: "دوره توسعه سمت کلاینت React و JS",
    to: "/Front-End",
  },
  {
    img: imgBackEnd,
    title: "Back End",
    text: "دوره توسعه سمت سرور با ASP.NET",
    to: "/Back-End",
  },
  {
    img: imgUI,
    title: "UI/UX",
    text: "آموزش طراحی رابط کاربری و تجربه کاربری",
    to: "/UIUX",
  },
  {
    img: imgSEO,
    title: "SEO",
    text: "آموزش بهینه‌سازی موتور جستجو",
    to: "/SEO",
  },
  {
    img: imgICDL,
    title: "ICDL",
    text: "دوره آفیس و مهارت‌های اولیه کامپیوتر",
    to: "/ICDL",
  },
  {
    img: imgWordPress,
    title: "Word Press",
    text: "دوره وردپرس با روش نوین",
    to: "/WordPress",
  },
];

const bootcampSections = [
  {
    title: "با دوره‌های بوت‌کمپ تروسکه برنامه‌نویس حرفه‌ای شوید!",
    text: "یادگیری برنامه‌نویسی می‌تواند چالش‌برانگیز باشد، اما با یک مسیر آموزشی درست و پشتیبانی مناسب، می‌توان به یک برنامه‌نویس ماهر تبدیل شد. بوت‌کمپ‌های آموزشی تروسکه فرصتی ایده‌آل برای شروع یا ارتقای مهارت‌های برنامه‌نویسی شما هستند. چه یک تازه‌کار باشید که قصد ورود به دنیای فناوری را دارد، و چه یک توسعه‌دهنده با تجربه که می‌خواهد دانش خود را به‌روز کند، دوره‌های ما با رویکرد پروژه‌محور و پشتیبانی دائمی شما را تا رسیدن به موفقیت همراهی می‌کنند.",
  },
  {
    title: "یادگیری برنامه‌نویسی به سبک پروژه‌محور",
    text: "بهترین راه یادگیری برنامه‌نویسی، کار روی پروژه‌های واقعی است. در بوت‌کمپ تروسکه، آموزش‌ها فقط تئوری نیستند، بلکه در هر دوره شما از همان ابتدا با چالش‌های دنیای واقعی روبه‌رو می‌شوید و انجام پروژه‌های کاربردی نه‌تنها باعث درک عمیق‌تر مفاهیم می‌شود، بلکه شما را برای ورود به بازار کار آماده می‌کند. از طراحی وبسایت‌های حرفه‌ای گرفته تا توسعه نرم‌افزارهای کاربردی، ما به شما کمک می‌کنیم تا مهارت‌های خود را در قالب پروژه‌های عملی تقویت کنید و با تجربه‌ای ارزشمند، به‌عنوان یک توسعه‌دهنده حرفه‌ای وارد دنیای فناوری شوید.",
  },
  {
    title: "ثبت‌نام و شرایط شرکت در بوت‌کمپ",
    text: "برای شرکت در بوت‌کمپ‌های آموزشی تروسکه، کافیست دوره موردنظر خود را انتخاب کرده و ثبت‌نام کنید.",
  },
];

const Bootcamps = () => {
  return (
    <>
      <div className="p-0 sm:p-10 dark:text-white">
        {bootcampSections.map((section, index) => (
          <TextSection
            key={index}
            title={section.title}
            text={section.text}
            className="p-4"
          />
        ))}

        <div className="px-0 pt-8 pb-14 sm:px-8 sm:pt-8 sm:pb-14 flex flex-wrap gap-8 sm:gap-16 justify-center">
          {bootcampData.map((bootcamp) => (
            <Card
              key={bootcamp.to}
              img={bootcamp.img}
              title={bootcamp.title}
              text={bootcamp.text}
              to={bootcamp.to}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bootcamps;
