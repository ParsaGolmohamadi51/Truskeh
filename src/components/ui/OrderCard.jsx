import { Link } from "react-router-dom";

const OrderCard = ({ title, img, id }) => {
  return (
    <div className="flex flex-col w-full md:w-2/5 justify-center items-center gap-6 p-6 rounded-3xl bg-gray-500">
      <h4 className="text-white text-xl text-center">{title}</h4>
      <img src={img} alt="img" className="w-80 h-auto" />
      <Link to={id}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-8 rounded-2xl bg-white dark:bg-yellow-500 size-6 text-black border-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
    </div>
  );
};

export default OrderCard;
