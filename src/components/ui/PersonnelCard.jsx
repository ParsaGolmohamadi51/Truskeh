import imgGmail from "../../assets/icons/icons8-gmail-48.png";

const PersonnelCard = ({ img, name, position, description, email }) => {
  return (
    <>
      <div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2 sm:p-6 flex sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105 duration-300">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-500"
          />

          <div className="flex flex-col text-center sm:text-right">
            <h4 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
              {name}
            </h4>
            <p className="text-green-500 font-semibold text-sm sm:text-base md:text-lg">
              {position}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base mt-2">
              {description}
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img
                src={imgGmail}
                alt="Gmail"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base">
                {email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonnelCard;
