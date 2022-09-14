import { PrismaClient } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';
import Timeline from '../components/Timeline';
import { postType } from '../type';

const prisma = new PrismaClient();

const Home: NextPage<postType> = ({ posts }: postType) => {
  // console.log(1, posts);
  return (
    <>
      <Timeline posts={posts} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true
    }
  });
  return {
    props: {
      posts
    }
  };
};
