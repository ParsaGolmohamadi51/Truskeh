import TextSection from "../../components/TextSection";
import OrderCard from "../../components/ui/OrderCard";
import web from "../../assets/images/order-img/web.png";
import graphics from "../../assets/images/order-img/Graphics.png";
import ai from "../../assets/images/order-img/AI.png";
import app from "../../assets/images/order-img/app.png";

const Order = () => {
  return (
    <>
      <div className="p-4 sm:p-14 dark:text-white">
        <TextSection
          title={<h4>سفارش سایت یا اپلیکیشن اختصاصی</h4>}
          text={
            <p>
              اگر به فکر راه‌اندازی یک کسب‌وکار آنلاین هستید یا قصد دارید خدمات
              خود را حرفه‌ای‌تر و گسترده‌تر ارائه دهید، ما در تروسکه همراه
              شماییم تا قدم‌به‌قدم در این مسیر رشد کنار شما باشیم. تیم ما با
              طراحی وب‌سایت‌ها و اپلیکیشن‌های اختصاصی، متناسب با نیاز دقیق
              کسب‌وکار و کاربران‌تان، تجربه‌ای منحصر‌به‌فرد را برایتان رقم
              می‌زند. ما به جزئیات اهمیت می‌دهیم؛ از طراحی مدرن و کاربرپسند
              گرفته تا سرعت بالا، امنیت بالا، و سازگاری کامل با انواع دستگاه‌ها،
              همه چیز در پروژه شما رعایت خواهد شد. علاوه بر این، پشتیبانی منظم و
              به‌روزرسانی‌های دوره‌ای هم جزو خدمات ماست تا خیالتان همیشه راحت
              باشد. کافیست تصمیم بگیرید که به یک سایت نیاز دارید یا یک اپلیکیشن؛
              ما از همان ابتدا تا رسیدن به نتیجه‌ای حرفه‌ای و رضایت‌بخش، با تخصص
              و انرژی در کنار شما هستیم.
            </p>
          }
        />
        <div className="flex flex-row flex-wrap gap-10 justify-around p-6 mt-6">
          <OrderCard title="وبسایت" img={web} id={"/order-web"} />
          <OrderCard title="گرافیک" img={graphics} id={""} />
          <OrderCard title="هوش مصنوعی" img={ai} id={""} />
          <OrderCard title="اپلیکیشن" img={app} id={""} />
        </div>
      </div>
    </>
  );
};

export default Order;
