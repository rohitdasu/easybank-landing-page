import { MouseEventHandler } from "react";

export interface NavbarProps {
  navigations: Navigation[];
}

export interface NavbarLinksProps extends NavbarProps {}

export interface IconProps {
  url: string;
  onClick?: (event: any) => void;
}

export type Navigation = {
  id: string;
  title: string;
  url: string;
};
