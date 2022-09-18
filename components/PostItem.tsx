import React from 'react';
import { postType } from '../type';

const PostItem = ({ post }: { post: postType }) => {
  console.log(post.category);
  return (
    <li key={post.id} className="relative rounded-xl bg-zinc-700 p-10 text-white">
      <span className="absolute -top-4 left-2 rounded-full bg-yellow-600 px-4 py-2 text-base">{post.category}</span>
      <h2 className="mt-2 mb-4 text-2xl font-bold">{post.title}</h2>
      <p className="text-base">情報もと：{post.url}</p>
      <p className="mt-6 whitespace-pre-wrap text-base">{post.content}</p>
    </li>
  );
};

export default PostItem;
