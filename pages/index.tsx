import { GetServerSideProps, NextPage } from 'next';
import prisma from '../lib/prisma';
import Timeline from '../components/Timeline';
import { postType } from '../type';

const Home: NextPage<postType> = ({ posts }: postType) => {
  // console.log(1, posts);
  return (
    <div className="flex justify-center">
      <Timeline posts={posts} />
      <div className="text-blue-500">www</div>
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
      content: true
    }
  });
  return {
    props: {
      posts
    }
  };
};
