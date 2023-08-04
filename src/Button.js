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
  const classes = className("px-3 py-1.5 border mb-2 flex items-center gap-2", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-black bg-black text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-500 bg-yellow-500 text-black": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-transparent": outline,
    "text-blue-500": primary && outline,
    "text-black": secondary && outline,
    "text-green-500": success && outline,
    "text-yellow-500": warning && outline,
    "text-red-500": danger && outline,
  });
  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count >= 2) {
      return new Error("Too many variation labels on one element!");
    }
  },
};

export default Button;
