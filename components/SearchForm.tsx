import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import prisma from '../lib/prisma';

const SearchForm = (result: any) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      console.log(result);
      // // console.log(prisma);
      // const result = await prisma.post.findMany({
      //   where: {
      //     title: {
      //       search: searchText
      //     }
      //   }
      // });
      // // console.log(result, searchText);
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const result = await prisma.post.findMany({
//     where: {
//       title: 'test'
//     }
//   });
//   console.log(result);
//   return {
//     props: {
//       result: result
//     }
//   };
// };
