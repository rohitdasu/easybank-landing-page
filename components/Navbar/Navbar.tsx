import React, { FC } from "react";
import Image from "next/image";
import { RequestInvite } from "../Button";
import {
  NavigationLinksDesktop,
  NavigationLinksMobile,
} from "./NavigationLinks";
import { IconProps, NavbarProps } from "./Navbar.interface";

const Logo = () => {
  return <Image src="/logo.svg" alt="logo" height={100} width={150} />;
};

const Icon: FC<IconProps> = ({ url, onClick }) => {
  return (
    <Image onClick={onClick} src={url} alt="logo" height={36} width={36} />
  );
};

export const Navbar: FC<NavbarProps> = ({ navigations }) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = React.useState(
    () => false
  );
  return (
    <div className="py-5 px-8 bg-white sticky top-0 z-40">
      <div className="flex-row items-center justify-between max-w-6xl mx-auto hidden md:flex">
        <Logo />
        <NavigationLinksDesktop navigations={navigations} />
        <RequestInvite />
      </div>
      {/* --- */}
      <div className="flex flex-row items-center justify-between md:hidden h-8 relative">
        <Logo />
        {!isMobileNavigationOpen && (
          <Icon
            onClick={() => setIsMobileNavigationOpen(true)}
            url="/icon-hamburger.svg"
          />
        )}
        {isMobileNavigationOpen && (
          <Icon
            onClick={() => setIsMobileNavigationOpen(false)}
            url="/icon-close.svg"
          />
        )}
        {isMobileNavigationOpen && (
          <NavigationLinksMobile navigations={navigations} />
        )}
      </div>
    </div>
  );
};
