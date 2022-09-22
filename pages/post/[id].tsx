import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../../components/Layout';
import PostDetailContent from '../../components/PostDetailContent';
import { PostForm } from '../../components/PostForm';
import prisma from '../../lib/prisma';

type PathParams = {
  id: string;
};

type PageProps = {
  title: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const res = await prisma.post.findMany();
  const paths = res.map((path: any) => {
    return {
      params: { id: path.id.toString() }
    };
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<any> = async (context: any) => {
  const id = context.params.id;
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

const PostDetail: React.FC<PageProps> = ({ post }: any) => {
  // console.log(post);
  const [postData] = post;
  return (
    <Layout title={postData.title}>
      <PostForm props={postData} />
    </Layout>
  );
};

export default PostDetail;