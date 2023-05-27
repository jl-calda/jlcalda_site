import clsx from "clsx";
import { on } from "events";
import { Merriweather } from "next/font/google";
import { IconType } from "react-icons";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

interface ButtonProps {
  label?: string;
  icon?: IconType | undefined;
  onClick?: () => void;
  secondary?: boolean;
  small?: boolean;
  full?: boolean;
  edgy?: boolean;
  rounded?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  secondary,
  small,
  full,
  edgy,
  type = "button",
  disabled = false,
  rounded,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        rounded ? "rounded-full" : edgy ? "rounded-sm" : "rounded-md",
        rounded && "w-10 h-10",
        !rounded && "px-3 py-2",
        "flex flex-row items-center justify-center space-x-2",
        "border",
        secondary ? "border-gray-800" : "border-gray-800",
        secondary ? "bg-white" : "bg-gray-800",
        secondary ? "hover:bg-gray-100" : "hover:bg-gray-700",
        "focus:outline-teal-500",
        full && "w-full",
        small ? "text-xs" : "text-sm",
        "cursor-pointer",
        "shadow-sm",
        merriweather.className
      )}
    >
      {Icon && (
        <Icon
          size={small ? 15 : 20}
          className={clsx(secondary ? "text-gray-600" : "text-white")}
        />
      )}
      {label && (
        <span
          className={clsx(
            secondary ? "text-gray-600" : "text-white",
            secondary ? "hover:text-gray-900" : "hover:text-gray-200"
          )}
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default Button;
