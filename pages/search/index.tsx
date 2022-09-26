import { NextPage } from 'next';
import CategoryNav from '../../components/CategoryNav';
import { Layout } from '../../components/Layout';
import SearchForm from '../../components/SearchForm';
import { allPostsType } from '../../type';

const Search: NextPage<allPostsType> = () => {
  return (
    <Layout title="search">
      <SearchForm />
    </Layout>
  );
};

export default Search;
