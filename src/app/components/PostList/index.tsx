import * as React from 'react';
import * as style from './style.css';
import { PostModel } from 'app/models/PostModel';

export namespace PostList {
  export interface Props {
    posts: PostModel[];
  }
}

export class PostList extends React.Component<PostList.Props> {
  render() {
    const { posts } = this.props;

    return (
      <section className={style.main}>
        <ul className={style.normal}>
          {posts && posts.map((post, index) => (
            <li key={index}>{post.title} - {post.user.username}</li>
          ))}
        </ul>
      </section>
    );
  }
}
