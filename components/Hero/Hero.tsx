import React from "react";
import Image from "next/image";
import { RequestInvite } from "../Button";

const HeroImageDesktop = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] bg-no-repeat bg-cover absolute w-1/2 bg-intro-desktop -top-[3rem] right-[5rem] lg:block hidden">
      <Image
        src="/image-mockups.png"
        alt="hero_image"
        className="absolute top-[1.5rem] -right-20"
        height={1000}
        width={1000}
      />
    </div>
  );
};

const HeroImageMobile = () => {
  return (
    <div className="h-full w-full bg-cover relative bg-no-repeat bg-intro-mobile lg:hidden block">
      <Image
        src="/image-mockups.png"
        alt="hero_image"
        className="p-6"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="bg-[#fafafa] w-full">
      <div className="min-h-[calc(100vh-6rem)] flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto justify-center gap-8 md:gap-16 lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 py-8 lg:py-0">
          <h1 className="text-4xl lg:text-7xl text-center lg:text-start">
            Next generation digital banking
          </h1>
          <h4 className="text-base text-gray-400 w-4/5 mx-auto lg:mx-0 text-center lg:text-start">
            Take your financial life online. Your EasyBank account will be
            one-stop shop for spending, saving, budgeting, investing and much
            more.
          </h4>
          <div className="text-center lg:text-start">
            <RequestInvite />
          </div>
        </div>
        <HeroImageMobile />
        <HeroImageDesktop />
      </div>
    </div>
  );
};
