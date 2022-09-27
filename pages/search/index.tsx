import { GetServerSideProps, NextPage } from 'next';
import CategoryNav from '../../components/CategoryNav';
import { Layout } from '../../components/Layout';
import SearchForm from '../../components/SearchForm';
import prisma from '../../lib/prisma';
// import { useSearchTextStore } from '../../lib/store';
import { allPostsType } from '../../type';
import { initializeStore } from '../../lib/store';

const Search: NextPage<allPostsType> = ({ result }: any) => {
  // const store = useSearchTextStore((state) => state);
  // console.log(store.searchText);
  return (
    <Layout title="search">
      <SearchForm result={result} />
    </Layout>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
  // const store = useSearchTextStore((state) => state);
  // console.log(store);
  const zustandStore = initializeStore();
  zustandStore.getState().setSearchText('test');
  console.log(123, zustandStore.getState().searchText);

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
