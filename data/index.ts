import { Article } from "@/components/Articles/Articles.interface";
import { Feature } from "@/components/Features/Features.interface";
import { Social } from "@/components/Footer/Footer.interface";
import type { Navigation } from "@/components/Navbar";

export const navigations: Navigation[] = [
  {
    id: "1",
    title: "Home",
    url: "#",
  },
  {
    id: "2",
    title: "About",
    url: "#",
  },
  {
    id: "3",
    title: "Contact",
    url: "#",
  },
  {
    id: "4",
    title: "Blog",
    url: "#",
  },
  {
    id: "5",
    title: "Careers",
    url: "#",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "/icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: "2",
    icon: "/icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits.",
  },
  {
    id: "3",
    icon: "/icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: "4",
    icon: "/icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    image: "/image-currency.jpg",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    id: "2",
    image: "/image-restaurant.jpg",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
  },
  {
    id: "3",
    image: "/image-plane.jpg",
    author: "Wilson Hutton",
    title: "Take your EasyBank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
  },
  {
    id: "4",
    image: "/image-confetti.jpg",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];

export const socials: Social[] = [
  {
    id: "1",
    icon: "/icon-facebook.svg",
    title: "Facebook",
  },
  {
    id: "2",
    icon: "/icon-twitter.svg",
    title: "Twitter",
  },
  {
    id: "3",
    icon: "/icon-pinterest.svg",
    title: "Pinterest",
  },
  {
    id: "4",
    icon: "/icon-youtube.svg",
    title: "YouTube",
  },
  {
    id: "5",
    icon: "/icon-instagram.svg",
    title: "Instagram",
  },
];

export const navs: Navigation[] = [
  {
    id: "1",
    title: "Home",
    url: "#",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#",
  },
  {
    id: "3",
    title: "Products",
    url: "#",
  },
  {
    id: "4",
    title: "About Us",
    url: "#",
  },
];

export const otherNavigations: Navigation[] = [
  {
    id: "1",
    title: "Careers",
    url: "#",
  },
  {
    id: "2",
    title: "Community",
    url: "#",
  },
  {
    id: "3",
    title: "Privacy Policy",
    url: "#",
  },
];
