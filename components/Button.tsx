import cn from "classnames";

interface ButtonProps {
  icon?: string;
  size?: "sm" | "md" | "lg";
  filled?: boolean;
  type?: "submit" | "button";
  disabled?: boolean;
  [x: string]: any;
}

const sizes = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-xl",
};

const Button = ({ filled, icon, size, type, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type={type || "button"}
      className={
        "w-10 h-10 rounded-full group hover:bg-shuttle-gray hover:bg-opacity-10 z-20"
      }
    >
      <span
        className={cn(
          sizes[size || "lg"],
          filled ? "material-icons" : "material-icons-outlined",
          "text-bunker dark:text-loblolly group-hover:text-black dark:group-hover:text-white group-hover:bg-opacity-60"
        )}
      >
        {icon}
      </span>
    </button>
  );
};

export default Button;
