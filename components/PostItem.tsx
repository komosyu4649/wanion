import React from 'react';
import { postType } from '../type';

const PostItem = ({ post }: { post: postType }) => {
  return (
    <li key={post.id} className="text-red-700">
      {post.title}
    </li>
  );
};

export default PostItem;
