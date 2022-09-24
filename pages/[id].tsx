import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../components/Layout';
import PostDetailContent from '../components/PostDetailContent';
import prisma from '../lib/prisma';
import { postType } from '../type';

type PathParams = {
  id: string;
};

// type PageProps = {
//   title: string;
// };

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
  console.log(JSON.parse(JSON.stringify(res)));
  return {
    props: {
      // post: res
      post: JSON.parse(JSON.stringify(res))
    }
  };
};

const PostDetail: React.FC<postType[]> = ({ post }) => {
  console.log(post);
  const [postData] = post;
  return (
    <Layout title={postData.title}>
      <PostDetailContent props={postData} />
    </Layout>
  );
};

export default PostDetail;
