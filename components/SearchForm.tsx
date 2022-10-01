import React, { useEffect, useState } from 'react';
import { useSearchResultStore } from '../lib/store';
import { postType } from '../type';

const SearchForm = () => {
  const [APIResponse, setAPIResponse] = useState([]);
  const [searchText, setSearchText] = useState('');

  const store = useSearchResultStore((state) => state);
  const resultSearch = (response: postType[]) => {
    store.setSearchResult(response);
  };

  useEffect(() => {
    resultSearch(APIResponse);
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
    <div className="mb-16">
      <form onSubmit={(e) => handleSubmit(e)} action="" className="">
        <div className="flex h-12 flex-row overflow-hidden rounded-md">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="search"
            id="search"
            type="text"
            className="h-10 h-full w-full px-3 text-black"
            placeholder="例) 年収アップ"
          />
          <button type="submit" className="h-full w-20 bg-yellow-600 text-base text-white">
            検索
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
