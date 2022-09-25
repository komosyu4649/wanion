import React from 'react';
import { useStore } from '../lib/store';
import { allPostsType } from '../type';

const CategoryNav = ({ posts }: allPostsType) => {
  const allCategoryArray = posts.map((post) => post.category);
  const allCategory = [...new Set(allCategoryArray)];

  const store = useStore((state) => state);
  const changeCategory = (category: string) => {
    store.setCategory(category);
  };

  return (
    <div className="mb-20 border-b-2 border-white px-4">
      <ul className="flex flex-row">
        {allCategory.map((category) => (
          <li>
            <button className="py-6 px-8 font-semibold text-white" onClick={() => changeCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
