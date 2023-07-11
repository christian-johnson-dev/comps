import React from "react";

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
  // Component Logic
  return <button>{children}</button>;
};

export default Button;
