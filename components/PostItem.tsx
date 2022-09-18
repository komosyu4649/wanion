import React from 'react';
import { postType } from '../type';

const PostItem = ({ post }: { post: postType }) => {
  // console.log(post);
  return (
    <li key={post.id} className="">
      <div className="rounded-xl bg-zinc-800 p-10 text-white">
        <span className="text-base text-amber-300">{post.category}</span>
        <h2 className="mt-2 mb-4 text-2xl font-bold">{post.title}</h2>
        <p className="text-base">情報もと：{post.url}</p>
        <p className="mt-6 whitespace-pre-wrap text-base">{post.content}</p>
      </div>
    </li>
  );
};

export default PostItem;
