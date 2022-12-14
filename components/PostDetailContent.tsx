import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { postPropsType } from '../type';

const PostDetailContent = (postData: postPropsType) => {
  const router = useRouter();
  const refreshData = () => {
    router.push('/');
  };

  const deletePost = async (id: number) => {
    const body = { id };
    try {
      const res = await fetch('/api/post', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status !== 200) {
        console.log('something went wrong');
      } else {
        console.log('success');
        refreshData();
      }
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  return (
    <section className="relative rounded-xl bg-zinc-700 p-10 text-white">
      <time className="text-sm text-zinc-400">
        {postData.props.createdAt.substring(0, postData.props.createdAt.indexOf('T')).replace(/-/g, '/')}
      </time>
      <span className="absolute -top-4 left-2 rounded-full bg-yellow-600 px-4 py-2 text-base">
        {postData.props.category}
      </span>
      <h2 className="mt-4 mb-2 text-2xl font-bold">{postData.props.title}</h2>
      <p className="text-sm">
        情報もと：
        <a href={postData.props.url} rel="noopener noreferrer" target="_blank" className="border-white-500 border-b-2">
          {postData.props.url}
        </a>
      </p>
      <p className="mt-8 mb-8 whitespace-pre-wrap text-base">{postData.props.content}</p>
      <div className="flex gap-4">
        <Link href={`/post/${postData.props.id}/`}>
          <a className="border-b-2 border-zinc-500 text-sm text-zinc-400">編集</a>
        </Link>
        <button
          className="border-b-2 border-zinc-500 text-sm text-zinc-400"
          onClick={() => deletePost(postData.props.id)}
        >
          削除
        </button>
      </div>
    </section>
  );
};

export default PostDetailContent;
