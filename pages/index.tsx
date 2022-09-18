import { GetServerSideProps, NextPage } from 'next';
import prisma from '../lib/prisma';
import Timeline from '../components/Timeline';
import { allPostsType } from '../type';
import { Layout } from '../components/Layout';

const Home: NextPage<allPostsType> = ({ posts }: allPostsType) => {
  return (
    <Layout title="top">
      <Timeline posts={posts} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      url: true,
      content: true,
      category: true
    }
  });
  return {
    props: {
      posts
    }
  };
};
