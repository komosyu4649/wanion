import { GetServerSideProps, NextPage } from 'next';
import prisma from '../lib/prisma';
import Timeline from '../components/Timeline';
import { allPostsType } from '../type';

const Home: NextPage<allPostsType> = ({ posts }: allPostsType) => {
  console.log(posts);
  return (
    <div className="flex justify-center">
      <Timeline posts={posts} />
    </div>
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
