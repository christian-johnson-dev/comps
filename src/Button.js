import React from "react";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const classes = className("px-3 py-1.5 border mb-1", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-black bg-black text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-500 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-transparent": outline,
    "text-blue-500": outline && primary,
    "text-black": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
  });
  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  isValidButtonType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        `You can assign only one of the following: primary, secondary, success, warning, danger.`
      );
    }
  },
};

export default Button;
