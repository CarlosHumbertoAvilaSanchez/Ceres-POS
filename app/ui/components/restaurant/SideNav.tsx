"use client";

import DashboardIcon from "@icons/DashboardIcon";
import MenuIcon from "@icons/MenuIcon";
import EmployeesIcon from "@icons/EmployeesIcon";
import ProductsIcon from "@icons/ProductsIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ICONS_POSITION: Record<
  "restaurant" | "menu" | "products" | "employees",
  string
> = {
  restaurant: "-top-4",
  menu: "top-16",
  products: "top-36",
  employees: "top-56",
};

export default function Navbar() {
  const [position, setPosition] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const currentPage = pathname.split("/")[2] as keyof typeof ICONS_POSITION;
    setPosition(ICONS_POSITION[currentPage] || ICONS_POSITION["restaurant"]);
  }, [pathname]);

  return (
    <>
      <aside className="bg-black opacity-90 p-2 w-20 rounded-3xl">
        <nav className="flex flex-col h-full justify-center items-center">
          <ul className="flex flex-col items-center relative restaurant__nav">
            <li className="flex h-20">
              <Link href="/restaurant">
                <DashboardIcon />
              </Link>
            </li>
            <li className="flex h-20">
              <Link href="/restaurant/menu">
                <MenuIcon />
              </Link>
            </li>
            <li className="flex h-20">
              <Link href="/restaurant/products">
                <ProductsIcon />
              </Link>
            </li>
            <li className="flex h-20">
              <Link href="/restaurant/employees">
                <EmployeesIcon />
              </Link>
            </li>
            <div
              className={`restaurant__currentPage w-16 h-16 bg-green-600 rounded-full absolute -z-10 ${position}`}
            ></div>
          </ul>
        </nav>
      </aside>
    </>
  );
}
