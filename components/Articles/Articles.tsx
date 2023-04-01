import React, { FC } from "react";
import { Article } from "./Article";
import { ArticlesProps } from "./Articles.interface";

export const Articles: FC<ArticlesProps> = ({ articles }) => {
  return (
    <div className="bg-[#fafafa] p-8">
      <div className="max-w-6xl mx-auto my-14">
        <p className="text-4xl text-center lg:text-start">Latest Articles</p>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles?.map((article) => {
            return (
              <li key={article.id}>
                <Article article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
