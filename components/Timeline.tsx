import React from 'react';
import { allPostsType, postType } from '../type';
import PostItem from './PostItem';

const Timeline = ({ posts }: allPostsType) => {
  // posts.sort(function (a, b) {
  //   return a < b ? 1 : -1;
  // });
  console.log(posts);
  return (
    <ul className="grid gap-y-12">
      {posts.map((post: postType) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

export default Timeline;
