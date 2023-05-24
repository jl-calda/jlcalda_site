"use client";

import { useRouter } from "next/navigation";
import useRoutes from "../_hooks/useRoutes";
import { RouteType } from "../_types";
import NavbarItem from "./NavbarItem";
import clsx from "clsx";

import { Fondamento } from "next/font/google";

const fondamento = Fondamento({
  subsets: ["latin"],
  weight: "400",
});

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

type Props = {};

const Navbar = (props: Props) => {
  const routes = useRoutes();
  const router = useRouter();
  return (
    <nav className="absolute flex flex-col w-full sm:justify-end border-b border-gray-100">
      <div className="flex flex-row justify-between items-center px-2 mt-2 ">
        <div
          onClick={() => router.push("/")}
          className={clsx(
            "ml-8 text-3xl font-bold",
            "text-gray-700",
            "px-4 py-2 rounded-md",
            "cursor-pointer",
            fondamento.className
          )}
        >
          JL
        </div>
        <button
          onClick={() => {}}
          className={clsx(
            "mr-4 px-3 py-2 rounded-md",
            "text-sm text-gray-400",
            "border",
            "bg-gray-900",
            "text-white text-sm",
            "cursor-pointer",
            "hover:bg-gray-800 hover:text-gray-200",
            "shadow-sm",
            merriweather.className
          )}
        >
          Connect
        </button>
      </div>
      <ul
        className={clsx(
          "flex flex-row space-x-2 items-center justify-around p-2",
          "sm:flex sm:flex-col sm:space-y-2 sm:justify-start"
        )}
      >
        {routes.map((route: RouteType) => (
          <NavbarItem
            key={crypto.randomUUID()}
            route={route}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
