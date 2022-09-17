import React from 'react';
import { postType } from '../type';

const PostItem = ({ post }: { post: postType }) => {
  console.log(post);
  return (
    <li key={post.id} className="">
      <div className="rounded-3xl bg-zinc-800 p-10 text-white">
        <h2 className="mb-4 text-2xl">{post.title}</h2>
        <p className="text-base">情報もと：{post.url}</p>
        <p className="mt-6 text-base">{post.content}</p>
      </div>
    </li>
  );
};

export default PostItem;
