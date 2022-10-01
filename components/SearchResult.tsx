import Link from 'next/link';
import React from 'react';
import { postType } from '../type';
import PostItem from './PostItem';

type Search = {
  results: postType[];
};

const SearchResult: React.FC<Search> = ({ results }) => {
  return (
    <div>
      <ul className="grid gap-y-12 px-8">
        {results ? results.map((result: postType) => <PostItem post={result} key={result.id} />) : []}
      </ul>
    </div>
  );
};

export default SearchResult;
