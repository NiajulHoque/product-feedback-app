export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}
