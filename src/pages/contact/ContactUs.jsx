import TextSection from "../../components/TextSection";
import iconMap from "../../assets/icons/icons8-map-48.png";
import iconPhone from "../../assets/icons/icons8-phone-48.png";
import iconGmail from "../../assets/icons//icons8-gmail-48.png";
import iconWhatsApp from "../../assets/icons/icons8-whatsapp-30.png";
import iconLinkedIn from "../../assets/icons/icons8-linkedin.png";
import iconInstagram from "../../assets/icons/icons8-instagram-30.png";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  const position = [35.272068812902404, 46.99462716435778];

  return (
    <>
      <div className="p-4 sm:p-10 dark:text-white">
        <TextSection
          title={<h4 className="mb-8">راه های ارتباطی</h4>}
          text={
            <div className="flex items-center gap-5 mr-6">
              <img src={iconMap} alt="icon" className="w-8 sm:w-12" />
              <span>
                سنندج - شهرک بهاران - خیابان دانشجو - پارک علم و فناوری استان
                کردستان ساختمان پیام نور - طبقه اول - کد پستی : 6617739439
              </span>
            </div>
          }
        />
        <TextSection
          text={
            <div className="flex items-center gap-5 mr-6">
              <img src={iconPhone} alt="icon" className="w-8 sm:w-12" />
              <span>دفتر مرکزی: 08733740586</span>
            </div>
          }
        />
        <TextSection
          text={
            <div className="flex items-center gap-5 mr-6">
              <img src={iconGmail} alt="icon" className="w-8 sm:w-12" />
              <span>truskehcompany@gmail.com</span>
            </div>
          }
        />
        <TextSection
          className="mt-8"
          title={<h4 className="mb-2">شبکه های اجتماعی</h4>}
          text={
            <div className="flex items-center gap-5 mr-6">
              <Link to="/d">
                <img
                  src={iconLinkedIn}
                  alt="icon"
                  className="cursor-pointer transition-transform duration-700 ease-in-out hover:scale-125 hover:rotate-[360deg]"
                />
              </Link>
              <Link to="/d">
                <img
                  src={iconWhatsApp}
                  alt="icon"
                  className="cursor-pointer transition-transform duration-700 ease-in-out hover:scale-125 hover:rotate-[360deg]"
                />
              </Link>
              <Link to="/d">
                <img
                  src={iconInstagram}
                  alt="icon"
                  className="cursor-pointer transition-transform duration-700 ease-in-out hover:scale-125 hover:rotate-[360deg]"
                />
              </Link>
            </div>
          }
        />
        <MapContainer
          center={position}
          zoom={13}
          className="w-full h-96 my-10 rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default ContactUs;
