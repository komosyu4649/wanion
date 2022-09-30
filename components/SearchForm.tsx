import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import prisma from '../lib/prisma';
import { useSearchResultStore } from '../lib/store';

const SearchForm = () => {
  const [APIResponse, setAPIResponse] = useState([]);
  const [searchText, setSearchText] = useState('');

  const store = useSearchResultStore((state) => state);
  const resultSearch = (response: any) => {
    store.setSearchResult(response);
  };

  useEffect(() => {
    // console.log('APIResponse', APIResponse);
    // console.log('searchText', searchText);
  }, [searchText, APIResponse]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = { searchText };
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      setAPIResponse(await res.json());
      if (res.status !== 200) {
        console.log('something went wrong');
      } else {
        console.log('success', APIResponse);
        resultSearch(APIResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-12">
      <form onSubmit={(e) => handleSubmit(e)} action="" className="">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          name="search"
          id="search"
          type="text"
          className="h-10 w-full p-3"
        />
        <button type="submit" className="">
          検索
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
