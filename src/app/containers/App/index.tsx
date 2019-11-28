import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { omit } from 'app/utils';
import { PostActions } from 'app/actions';
import { PostList } from 'app/components';


export namespace App {
  export interface Props extends RouteComponentProps<void> {
    posts: RootState.PostState;
    actions: PostActions;
  }
}

@connect(
  (state: RootState, ownProps): Pick<App.Props, 'posts'> => {
    return { posts: state.posts };
  },
  (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
    actions: bindActionCreators(omit(PostActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {

  componentDidMount() {
    fetch('http://localhost:80/posts')
        .then(res => res.json())
        .then((posts)=> {
          this.props.actions.getPost(posts);
        })
  }

  render() {
    const { posts } = this.props;

    return (
      <div className={style.normal}>
        <header>
          <h1>Posts</h1>
        </header>
        <PostList posts={posts} />
      </div>
    );
  }
}
