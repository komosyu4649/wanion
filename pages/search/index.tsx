import { GetServerSideProps, NextPage } from 'next';
import CategoryNav from '../../components/CategoryNav';
import { Layout } from '../../components/Layout';
import SearchForm from '../../components/SearchForm';
import prisma from '../../lib/prisma';
import { allPostsType } from '../../type';

const Search: NextPage<allPostsType> = ({ result }: any) => {
  return (
    <Layout title="search">
      <SearchForm result={result} />
    </Layout>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await prisma.post.findMany({
    where: {
      title: {
        search: 'test'
      }
    }
  });
  console.log(result);
  return {
    props: {
      result: JSON.parse(JSON.stringify(result))
    }
  };
};
