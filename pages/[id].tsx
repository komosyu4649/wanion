import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import React from 'react';
import { Layout } from '../components/Layout';
import PostDetailContent from '../components/PostDetailContent';
import prisma from '../lib/prisma';
import { postType } from '../type';
import { ParsedUrlQuery } from 'querystring';

type PathParams = {
  id: string;
};

// type PageProps = {
//   title: string;
// };

type Props = {
  // post : PostData
  post: any;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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

// export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  console.log(context);
  const id = context.params!.id;
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

const PostDetail: React.FC<Props> = ({ post }) => {
  const [postData] = post;
  return (
    <Layout title={postData.title}>
      <PostDetailContent props={postData} />
    </Layout>
  );
};

export default PostDetail;
