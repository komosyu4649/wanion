import React from 'react';
import { useCategoryStore } from '../lib/store';
import { allPostsType, postType } from '../type';
import PostItem from './PostItem';

const Timeline = ({ posts }: allPostsType) => {
  const store = useCategoryStore((state) => state);
  const categoryState = store.category;
  const categoryPost = posts.filter((post) => post.category === categoryState);
  const selectPosts = categoryPost.length === 0 ? posts : categoryPost;
  // console.log(selectPosts);
  return (
    <ul className="grid gap-y-10 px-8">
      {selectPosts.map((post: postType) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default Timeline;
