import React from 'react';
import { useStore } from '../lib/store';
import { allPostsType, postType } from '../type';
import PostItem from './PostItem';

const Timeline = ({ posts }: allPostsType) => {
  const store = useStore((state) => state);
  const categoryState = store.category;
  const categoryPost = posts.filter((post) => post.category === categoryState);
  const selectPosts = categoryPost.length === 0 ? posts : categoryPost;
  return (
    <ul className="grid gap-y-12">
      {selectPosts.map((post: postType) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default Timeline;
