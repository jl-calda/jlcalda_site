import React from "react";
import { RouteType } from "../_types";
import Link from "next/link";
import clsx from "clsx";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

interface NavbarItemProps {
  route: RouteType;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ route }) => {
  return (
    <Link
      href={route.href}
      className={clsx(
        "px-3 py-2 rounded-sm",
        "tracking-wide",
        route.isActive ? "text-gray-800" : "text-gray-500",
        route.isActive ? "bg-gray-200" : "bg-transparent"
      )}
    >
      <li className={clsx("text-sm", merriweather.className)}>{route.label}</li>
    </Link>
  );
};

export default NavbarItem;
