import { Comment } from "./comment.model";

export interface Feedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}
