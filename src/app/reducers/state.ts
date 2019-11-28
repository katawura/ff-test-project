import { PostModel } from 'app/models';

export interface RootState {
  posts: RootState.PostState;
  router?: any;
}

export namespace RootState {
  export type PostState = PostModel[];
}
