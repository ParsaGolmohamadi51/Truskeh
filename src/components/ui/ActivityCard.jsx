const ActivityCard = ({ img, title, text }) => {
  return (
    <div className="group w-[18rem] h-auto shadow-lg rounded-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 relative overflow-hidden">
      <img
        src={img}
        alt="img"
        className="w-full object-cover rounded-t-lg mb-3"
      />

      <h5 className="text-base my-5 font-bold text-center">{title}</h5>

      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <p className="text-gray-600 dark:text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
