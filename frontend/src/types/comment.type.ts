import { Article } from "./article.type";

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  article?: Article;
}
