import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [APIResponse, setAPIResponse] = useState(null);

  const router = useRouter();

  useEffect(() => {
    console.log('title', title);
    console.log('url', url);
    console.log('content', content);
    console.log('APIResponse', APIResponse);
  }, [title, url, content, APIResponse]);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = { title, url, content };
    try {
      const res = await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status !== 200) {
        console.log('something went wrong');
      } else {
        resetForm();
        readDB();
        console.log('success');
      }
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    router.replace(router.asPath);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} action="" method="POST" className="">
        {/*  */}
        <div className="">
          <label htmlFor="title">title</label>
        </div>
        <div className="">
          <input onChange={(e) => setTitle(e.target.value)} name="title" id="title" type="text" className="" />
        </div>
        {/*  */}
        <div className="">
          <label htmlFor="url">url</label>
        </div>
        <div className="">
          <input onChange={(e) => setUrl(e.target.value)} name="url" id="url" type="text" className="" />
        </div>
        {/*  */}
        <div className="">
          <label htmlFor="content">content</label>
        </div>
        <div className="">
          <textarea onChange={(e) => setContent(e.target.value)} name="content" id="content" className="" />
        </div>
        {/*  */}
        <button type="submit">send</button>
      </form>
    </div>
  );
};
