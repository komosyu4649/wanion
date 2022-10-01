import React from 'react';
import { PostForm } from '../../components/PostForm';
import { Layout } from '../../components/Layout';

const post = () => {
  return (
    <Layout title="form">
      {/* <PostForm props={test} /> */}
      <PostForm />
    </Layout>
  );
};

export default post;
