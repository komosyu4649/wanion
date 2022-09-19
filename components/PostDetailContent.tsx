import React from 'react';

const PostDetailContent = (postData: any) => {
  console.log(postData.props);
  return (
    <section className="relative rounded-xl bg-zinc-700 p-10 text-white">
      <span className="absolute -top-4 left-2 rounded-full bg-yellow-600 px-4 py-2 text-base">
        {postData.props.category}
      </span>
      <h2 className="mt-2 mb-4 text-2xl font-bold">{postData.props.title}</h2>
      <p className="text-base">情報もと：{postData.props.url}</p>
      <p className="mt-6 mb-8 whitespace-pre-wrap text-base">{postData.props.content}</p>
      {/* <time className=" ">{post.createdAt.substring(0, post.createdAt.indexOf('T')).replace(/-/g, '/')}</time> */}
    </section>
  );
};

export default PostDetailContent;
