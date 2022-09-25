import React from 'react';
import { allPostsType, postType } from '../type';
import PostItem from './PostItem';

const Timeline = ({ posts }: allPostsType) => {
  return (
    <ul className="grid gap-y-12">
      {posts.map((post: postType) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default Timeline;
