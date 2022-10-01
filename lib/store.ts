import { useMemo } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { postType } from '../type';

type Category = {
  category: string;
  setCategory: (category: string) => void;
};
type Search = {
  searchResult: postType[];
  setSearchResult: (searchResult: postType[]) => void;
};

export const useCategoryStore = create<Category>((set) => ({
  category: '',
  setCategory: (category: string) =>
    set((state) => ({
      ...state,
      category
    }))
}));

export const useSearchResultStore = create<Search>((set) => ({
  searchResult: [],
  setSearchResult: (searchResult: postType[]) =>
    set((state) => ({
      ...state,
      searchResult
    }))
}));
