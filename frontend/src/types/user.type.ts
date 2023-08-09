import { Article } from "./article.type";
import { Comment } from "./comment.type";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  bio: string | null;
  image: any | null;
  articles: Article[];
  favorites: Article[];
  followedBy: User[];
  following: User[];
  comments: Comment[];
  demo: boolean;
}
