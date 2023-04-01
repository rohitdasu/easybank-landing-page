import React, { FC } from "react";
import { ArticleProps } from "./Articles.interface";
import Image from "next/image";

export const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-md flex flex-col">
      <Image
        src={article.image}
        alt={article.title}
        className="h-48 w-full object-cover"
        height={300}
        width={300}
      />
      <div className="flex flex-col p-5 gap-4">
        <p className="text-xs text-gray-400">By {article.author}</p>
        <p className="text-lg leading-5">{article.title}</p>
        <p className="text-sm text-gray-500">{article.description}</p>
      </div>
    </div>
  );
};
