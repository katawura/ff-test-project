import { createAction } from 'redux-actions';
import { PostModel } from 'app/models';

export namespace PostActions {
  export enum Type {
    GET_POSTS = 'GET_POSTS',
  }

  export const getPost = createAction<PostModel>(Type.GET_POSTS);
}

export type PostActions = Omit<typeof PostActions, 'Type'>;
