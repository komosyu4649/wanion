import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import prisma from '../lib/prisma';

const SearchForm = () => {
  const [APIResponse, setAPIResponse] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log('APIResponse', APIResponse);
    console.log('searchText', searchText);
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
        console.log('success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} action="" className="">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          name="search"
          id="search"
          type="text"
          className="h-10 w-full p-3"
        />
        <button type="submit">検索</button>
      </form>
    </div>
  );
};

export default SearchForm;
