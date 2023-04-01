import React, { FC } from "react";
import { NavbarLinksProps, Navigation } from "./Navbar.interface";
import Link from "next/link";

export const NavigationLinksDesktop: FC<NavbarLinksProps> = ({
  navigations,
}) => {
  return (
    <ul className="flex flex-row items-center gap-8">
      {navigations?.map((navlink) => {
        return (
          <Link key={navlink.id} href={navlink.url}>
            <li className="text-gray-400 hover:text-gray-600 text-base">
              {navlink.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export const NavigationLinksMobile: FC<NavbarLinksProps> = ({
  navigations,
}) => {
  return (
    <div className="absolute top-16 w-full py-8 rounded-md bg-white">
      <ul className="flex flex-col items-center gap-6">
        {navigations?.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url}>
              <li className="text-gray-800 text-base">{navlink.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
