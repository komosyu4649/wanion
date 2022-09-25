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

  const updatePost = async (id: number) => {
    router.push('/post');
    const body = { id };
    try {
      const res = await fetch('/api/post', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status !== 200) {
        console.log('update: something went wrong');
      } else {
        console.log('update: success', body);
      }
    } catch (error) {
      console.log('update: something went wrong', error);
    }
  };

  return (
    <section className="relative rounded-xl bg-zinc-700 p-10 text-white">
      <span className="absolute -top-4 left-2 rounded-full bg-yellow-600 px-4 py-2 text-base">
        {postData.props.category}
      </span>
      <h2 className="mt-2 mb-4 text-2xl font-bold">{postData.props.title}</h2>
      <p className="text-base">情報もと：{postData.props.url}</p>
      <p className="mt-6 mb-8 whitespace-pre-wrap text-base">{postData.props.content}</p>
      <button onClick={() => deletePost(postData.props.id)}>削除</button>
      {/* <button onClick={() => updatePost(postData.props.id)}>編集</button> */}
      <Link href={`/post/${postData.props.id}/`}>
        <a>編集</a>
      </Link>
      <time className=" ">
        {postData.props.createdAt.substring(0, postData.props.createdAt.indexOf('T')).replace(/-/g, '/')}
      </time>
    </section>
  );
};

export default PostDetailContent;
