import { FC } from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Footer";
import { FooterProps } from "./Footer.interface";
import { NavigationLinks } from "./NavigationLinks";
import { SocialProfiles } from "./SocialProfiles";
import { RequestInvite } from "../Button";

export const MobileFooter: FC<FooterProps> = ({
  socials,
  navigations,
  otherNavigations,
}) => {
  return (
    <div className="lg:hidden flex flex-col items-center justify-center gap-8 w-full px-8">
      <div className="flex flex-col items-center justify-between w-full gap-8">
        <Logo />
        <SocialProfiles socials={socials} />
      </div>
      <div className="flex flex-row justify-between w-full">
        <NavigationLinks navigations={navigations} />
        <NavigationLinks navigations={otherNavigations} />
      </div>
      <div className="px-8">
        <RequestInvite />
      </div>
      <Copyright />
    </div>
  );
};
