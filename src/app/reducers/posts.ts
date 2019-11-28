import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { PostActions } from 'app/actions/posts';
import { PostModel } from 'app/models';

const initialState: RootState.PostState = [
  {
    id: 1,
    title: 'Use Redux',
    body: 'Use Redux',
    user: {
      username: 'kelvin',
    }
  }
];

export const postReducer = handleActions<RootState.PostState, PostModel>(
  {
    [PostActions.Type.GET_POSTS]: (state, action) => {
      if (action.payload) {
        return state.concat(action.payload);
      }
      return state;
    },
  },
  initialState
);
