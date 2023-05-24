import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        isActive: pathname === "/",
      },
      {
        label: "About",
        href: "/about",
        isActive: pathname === "/about",
      },
      {
        label: "Projects",
        href: "/projects",
        isActive: pathname === "/projects",
      },
      {
        label: "Visitors",
        href: "/visitors",
        isActive: pathname === "/visitors",
      },
    ],
    [pathname]
  );
  return routes;
};

export default useRoutes;
