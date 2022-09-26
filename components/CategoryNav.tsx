import React from 'react';
import { useCategoryStore } from '../lib/store';
import { allPostsType } from '../type';

const CategoryNav = ({ posts }: allPostsType) => {
  const allCategoryArray = posts.map((post) => post.category);
  let allCategory = [...new Set(allCategoryArray)];
  allCategory.unshift('ALL');

  const store = useCategoryStore((state) => state);
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
