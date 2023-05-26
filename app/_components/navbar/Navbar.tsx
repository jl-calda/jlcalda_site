"use client";

import { useRouter } from "next/navigation";
import useRoutes from "../../_hooks/useRoutes";
import { RouteType } from "../../_types";
import NavbarItem from "./NavbarItem";
import clsx from "clsx";
import { AiOutlineRocket } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

import { Fondamento } from "next/font/google";

const fondamento = Fondamento({
  subsets: ["latin"],
  weight: "400",
});

import { Merriweather } from "next/font/google";
import Button from "../Button";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

type Props = {};

const Navbar = (props: Props) => {
  const routes = useRoutes();
  const router = useRouter();
  return (
    <div className="fixed w-full max-w-5xl mx-auto bg-gray-50">
      <nav className="relative flex flex-col w-full sm:justify-end border-b sm:pb-4 border-gray-100">
        <div className="flex flex-row justify-between items-center px-2 mt-2 ">
          <div
            onClick={() => router.push("/")}
            className={clsx(
              "ml-4 text-4xl font-bold",
              "text-gray-700",
              "flex flex-row items-center justify-center",
              "cursor-pointer",
              fondamento.className
            )}
          >
            {/* <FaLaptopCode size={30} /> */}
            <span>{`JL`}</span>
          </div>
          <Button
            label="Contact"
            icon={AiOutlineRocket}
            onClick={() => {}}
          />
        </div>
        <ul
          className={clsx(
            "flex flex-row space-x-2 items-center justify-around p-2",
            "sm:absolute sm:top-16 sm:right-0 sm:flex-col sm:space-y-2 sm:justify-start"
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
    </div>
  );
};

export default Navbar;
