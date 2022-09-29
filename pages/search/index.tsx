import { GetServerSideProps, NextPage } from 'next';
import CategoryNav from '../../components/CategoryNav';
import { Layout } from '../../components/Layout';
import SearchForm from '../../components/SearchForm';
import prisma from '../../lib/prisma';
import { useSearchResultStore } from '../../lib/store';
import { allPostsType } from '../../type';

const Search: NextPage<allPostsType> = ({ result }: any) => {
  const store = useSearchResultStore((state) => state);
  console.log(store.searchResult);
  // const store = useSearchTextStore((state) => state);
  // console.log(store.searchText);
  // ここのzustandのグローバルステートはテキストではなくて検索結果を返したい。
  return (
    <Layout title="search">
      <SearchForm />
    </Layout>
  );
};

export default Search;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const store = useSearchTextStore((state) => state);
//   console.log(store.searchText);
//   const result = await prisma.post.findMany({
//     where: {
//       title: {
//         search: 'test'
//       }
//     }
//   });
//   // console.log(result);
//   return {
//     props: {
//       result: JSON.parse(JSON.stringify(result))
//     }
//   };
// };
