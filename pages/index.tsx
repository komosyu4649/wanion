import { GetServerSideProps, NextPage } from 'next';
import prisma from '../lib/prisma';
import Timeline from '../components/Timeline';
import { allPostsType } from '../type';
import { Layout } from '../components/Layout';
import CategoryNav from '../components/CategoryNav';

const Home: NextPage<allPostsType> = ({ posts }: allPostsType) => {
  return (
    <Layout title="top">
      <CategoryNav posts={posts} />
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
      category: true,
      createdAt: true
    }
  });
  posts.sort(function (a, b) {
    return a < b ? 1 : -1;
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};
