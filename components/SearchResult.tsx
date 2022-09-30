import Link from 'next/link';
import React from 'react';
import { postType } from '../type';

const SearchResult = ({ results }: postType[]) => {
  return (
    <div>
      <ul className="grid gap-y-12">
        {results
          ? results.map((result: postType) => (
              <li key={result.id} className="relative rounded-xl bg-zinc-700 text-white">
                <Link href={`/${result.id}`}>
                  <a className="block p-10">
                    <span className="absolute -top-4 left-2 rounded-full bg-yellow-600 px-4 py-2 text-base">
                      {result.category}
                    </span>
                    <h2 className="mt-2 mb-4 text-2xl font-bold">{result.title}</h2>
                    <p className="text-base">情報もと：{result.url}</p>
                    {/* <p className="mt-6 mb-8 whitespace-pre-wrap text-base">{post.content}</p> */}
                    {/* <time className=" ">{post.createdAt.substring(0, post.createdAt.indexOf('T')).replace(/-/g, '/')}</time> */}
                  </a>
                </Link>
              </li>
            ))
          : []}
      </ul>
    </div>
  );
};

export default SearchResult;
