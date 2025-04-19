import imgGmail from "../../assets/icons/icons8-gmail-48.png";

const PersonnelCard = ({ img, name, position, description, email }) => {
  return (
    <div className="bg-[#c0c0c0] dark:bg-[#ffffff21] shadow-lg rounded-xl p-2 sm:p-6 flex sm:flex-row-reverse items-center justify-between gap-4 sm:gap-6 w-[30rem] max-w-lg dark:border-gray-700 transition-transform hover:scale-105 duration-300">
      <div className="flex flex-col text-center">
        <h4 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
          {name}
        </h4>
        <p className="text-green-500 font-semibold text-sm sm:text-base md:text-lg">
          {position}
        </p>
        <p className="text-gray-900 dark:text-gray-300 text-xs sm:text-sm md:text-base mt-2">
          {description}
        </p>

        <div className="flex items-center gap-2 mt-4 justify-center sm:justify-start">
          <img src={imgGmail} alt="Gmail" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-gray-900 dark:text-gray-200 text-xs sm:text-sm md:text-base">
            {email}
          </span>
        </div>
      </div>
      <img
        src={img}
        alt={name}
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-500"
      />
    </div>
  );
};

export default PersonnelCard;
