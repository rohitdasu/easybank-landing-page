export interface ArticlesProps {
  articles: Article[];
}

export interface ArticleProps {
  article: Article;
}

export type Article = {
  id: string;
  image: string;
  author: string;
  title: string;
  description: string;
};
