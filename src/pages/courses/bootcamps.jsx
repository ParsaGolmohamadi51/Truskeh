import Card from "../../components/ui/card";
import imgFrontEnd from "../../assets/images/Front-End.jpg";
import imgBackEnd from "../../assets/images/Back-End.jpg";
import imgSEO from "../../assets/images/SEO.jpg";
import imgUI from "../../assets/images/UI.jpg";
import imgICDL from "../../assets/images/ICDL.jpg";
import imgWordPress from "../../assets/images/Word-Press.jpg"

const Bootcamps = () => {
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
      text: "دوره آفیس و مهارت های اولیه کامپیوتر",
      to: "/ICDL",
    },
    {
      img: imgWordPress,
      title: "Word Press",
      text: "دوره وردپرس با روش نوین",
      to: "/WordPress",
    },
  ];

  return (
    <div className="p-8 flex flex-wrap gap-8 sm:gap-16 justify-center">
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
  );
};

export default Bootcamps;
