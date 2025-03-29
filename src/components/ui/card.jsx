import { Link } from "react-router-dom";
import Button from "./button";

const Card = ({ img, title, text, to }) => {
  return (
    <div className="w-80 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <img
        src={img}
        alt="img"
        className="rounded-t-lg select-none pointer-events-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="p-3 flex flex-col gap-4">
        <p className="text-left">{title}</p>
        <p>{text}</p>
        <Button
          variant="primary"
          size="medium"
          className="relative overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10"
        >
          <Link to={to}>ثبت نام</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;
