import React from 'react';
import { allPostsType, postType } from '../type';
import PostItem from './PostItem';

const Timeline = ({ posts }: allPostsType) => {
  return (
    <div className="w-5/12">
      <ul className="grid gap-y-6">
        {posts.map((post: postType) => (
          <PostItem post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
