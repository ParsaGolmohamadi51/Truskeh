import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className,
}) => {
  const baseStyles = "rounded-lg font-semibold transition-all duration-200";
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-7 py-3 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    outline:
      "border border-gray-600 text-gray-600 hover:border-gray-800 hover:text-gray-800",
    green: "border border-green-200 bg-green-500 text-white hover:bg-green-800",
    yellow:
      "border border-yellow-200 bg-yellow-400 text-black hover:bg-yellow-500",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "outline",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
