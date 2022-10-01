import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../../components/Layout';
import { PostForm } from '../../components/PostForm';
import prisma from '../../lib/prisma';
import { postType } from '../../type';
import { ParsedUrlQuery } from 'querystring';

type PathParams = {
  id: string;
};

type PageProps = {
  title: string;
};

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

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
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
  const idNumber = Number(id);
  const res = await prisma.post.findMany({
    where: {
      id: idNumber
    }
  });
  return {
    props: {
      post: JSON.parse(JSON.stringify(res))
    }
  };
};

const PostDetail: React.FC<PostProps> = ({ post }) => {
  console.log(post);
  const [postData] = post;
  return (
    <Layout title={postData.title}>
      <PostForm props={postData} />
    </Layout>
  );
};

export default PostDetail;
