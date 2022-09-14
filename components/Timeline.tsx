import React from 'react';
import { allPostsType, postType } from '../type';
import PostItem from './PostItem';

const Timeline = ({ posts }: allPostsType) => {
  return (
    <div>
      <ul>
        {posts.map((post: postType) => (
          <PostItem post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
