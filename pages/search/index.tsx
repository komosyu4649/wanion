import { GetServerSideProps, NextPage } from 'next';
import CategoryNav from '../../components/CategoryNav';
import { Layout } from '../../components/Layout';
import SearchForm from '../../components/SearchForm';
import SearchResult from '../../components/SearchResult';
import prisma from '../../lib/prisma';
import { useSearchResultStore } from '../../lib/store';
import { allPostsType } from '../../type';

const Search: NextPage<allPostsType> = () => {
  const store = useSearchResultStore((state) => state);
  return (
    <Layout title="search">
      <SearchForm />
      <SearchResult results={store.searchResult} />
    </Layout>
  );
};

export default Search;
