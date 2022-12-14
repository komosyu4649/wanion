import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { postPropsType } from '../type';

export const PostForm: React.FC<postPropsType | any> = (postData?) => {
  console.log(postData);
  const existingPost = postData?.props;
  const id = existingPost ? existingPost.id : '';
  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [url, setUrl] = useState(existingPost ? existingPost.url : '');
  const [content, setContent] = useState(existingPost ? existingPost.content : '');
  const [category, setCategory] = useState(existingPost ? existingPost.category : '');
  const [APIResponse, setAPIResponse] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // console.log('title', title);
    // console.log('url', url);
    // console.log('content', content);
    // console.log('category', category);
    // console.log('APIResponse', APIResponse);
  }, [title, url, content, category, APIResponse]);

  const readDB = async () => {
    try {
      const res = await fetch('/api/post', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      setAPIResponse(await res.json());
      if (res.status !== 200) {
        console.log('something went wrong');
      } else {
        console.log('success');
      }
    } catch (error) {
      console.log('db error', error);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = { id, title, url, content, category };
    try {
      const res = await fetch('/api/post', {
        method: existingPost ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status !== 200) {
        console.log('something went wrong');
      } else {
        resetForm();
        readDB();
        router.push('/');
        console.log('success');
      }
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setUrl('');
    setContent('');
    setCategory('');
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      action=""
      method={existingPost ? 'PUT' : 'POST'}
      className="rounded-xl bg-zinc-700 p-10"
    >
      <div className="flex flex-col">
        <label className="text-base text-white" htmlFor="category">
          ???????????????
        </label>
        <select
          className="mt-2 h-10 rounded-md px-3"
          name="category"
          id="category"
          value={existingPost?.category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">--choose category--</option>
          <option value="JOBCHANGE">??????</option>
          <option value="INVEST">??????</option>
        </select>
      </div>
      <div className="mt-8">
        <label className="text-base text-white" htmlFor="title">
          ????????????
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            id="title"
            type="text"
            className="h-10 w-full rounded-md px-3"
          />
        </div>
      </div>
      <div className="mt-8">
        <label className="text-base text-white" htmlFor="url">
          ????????????url
        </label>
      </div>
      <div className="mt-2">
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          name="url"
          id="url"
          type="text"
          className="h-10 w-full rounded-md px-3"
        />
      </div>
      <div className="mt-8">
        <label className="text-base text-white" htmlFor="content">
          ??????
        </label>
      </div>
      <div className="mt-2">
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name="content"
          id="content"
          className="h-48 w-full rounded-md p-3"
        />
      </div>
      <button
        className="mt-12 ml-auto mr-auto flex w-64 justify-center rounded-md bg-yellow-600 px-8 py-4 text-lg text-white"
        type="submit"
      >
        {existingPost ? '????????????' : '????????????'}
      </button>
    </form>
  );
};
