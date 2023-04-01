import React, { FC } from "react";
import { FeatureProps } from "./Features.interface";
import Image from "next/image";

export const Feature: FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-4">
      <Image src={feature.icon} alt={feature.title} height={56} width={56} />
      <p className="text-xl">{feature.title}</p>
      <p className="text-sm text-gray-400 text-center lg:text-start">
        {feature.description}
      </p>
    </div>
  );
};
