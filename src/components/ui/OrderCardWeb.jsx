import { useEffect, useRef, useState } from "react";

const OrderCardWeb = ({ plan, img }) => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <>
      <div className="rounded-xl w-full p-6 flex flex-col-reverse md:flex-row justify-around md:mt-14">
        <div
          ref={formRef}
          className="flex flex-col gap-5 w-full md:w-1/2 bg-[#ffffff1e] p-8 md:rounded-tr-xl md:rounded-br-xl"
        >
          <input
            type="text"
            className={`md:w-[100%] h-14 rounded-full p-4 bg-[#ffffff77] placeholder-black dark:placeholder-white dark:text-white text-black outline-none`}
            placeholder="نام محصول..."
          />
          <input
            type="text"
            className={`md:w-[90%] h-14 rounded-full p-4 bg-[#ffffff54] placeholder-black dark:placeholder-white dark:text-white text-black outline-none`}
            placeholder="توصیف شرکت"
          />
          <input
            type="text"
            className={`md:w-[80%] h-14 rounded-full p-4 bg-[#ffffff77] placeholder-black dark:placeholder-white dark:text-white text-black outline-none`}
            placeholder="ویژگی های طراحی"
          />
          <label
            className={`md:w-[70%] h-14 flex items-center p-4 bg-[#ffffff54] dark:text-white text-black rounded-full cursor-pointer`}
          >
            آپلود لوگو
            <input type="file" className="hidden" />
          </label>
          <input
            type="date"
            className={`md:w-[60%] h-14 rounded-full p-4 bg-[#ffffff77] text-black dark:text-white`}
            defaultValue={new Date().toISOString().split("T")[0]}
          />
          <label
            className={`md:w-[50%] h-14 flex items-center justify-between p-4 bg-[#ffffff54] text-black dark:text-white rounded-full cursor-pointer`}
          >
            <span className="flex items-center gap-2">
              انتخاب رنگ سازمانی
              <span
                className="w-5 h-5 rounded-full border border-white"
                style={{ backgroundColor: color }}
              ></span>
            </span>
            <input
              type="color"
              className="hidden"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </label>
          <button
            className={`md:w-[40%] bg-gradient-to-r from-amber-400 to-orange-500 hover:from-orange-500 hover:to-amber-400 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out`}
          >
            ثبت
          </button>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/2 items-center bg-[#ffffff1e] p-8 md:rounded-tl-xl md:rounded-bl-xl">
          <p className="text-black dark:text-white">{plan}</p>
          <img src={img} alt="img" className="md:w-96 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderCardWeb;
