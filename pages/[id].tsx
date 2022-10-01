import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import React from 'react';
import { Layout } from '../components/Layout';
import PostDetailContent from '../components/PostDetailContent';
import prisma from '../lib/prisma';
import { postType } from '../type';
import { ParsedUrlQuery } from 'querystring';

type ContextProps = {
  post: {
    params: { id: string };
    locales: undefined;
    locale: undefined;
    defaultLocale: undefined;
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

type PostProps = {
  post: postType[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await prisma.post.findMany();
  const paths = res.map((path) => {
    return {
      params: { id: path.id.toString() }
    };
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ContextProps, Params> = async (context) => {
  const id = context.params!.id;
  const number = Number(id);
  const res = await prisma.post.findMany({
    where: {
      id: number
    }
  });
  return {
    props: {
      post: JSON.parse(JSON.stringify(res))
    }
  };
};

const PostDetail: React.FC<PostProps> = ({ post }) => {
  const [postData] = post;
  return (
    <Layout title={postData.title}>
      <PostDetailContent props={postData} />
    </Layout>
  );
};

export default PostDetail;
