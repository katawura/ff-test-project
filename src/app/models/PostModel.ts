export interface PostModel {
  id: number;
  title: string;
  body: string;
  user: {
    username: string;
  };
}
