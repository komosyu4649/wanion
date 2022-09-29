import { useMemo } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type Category = {
  category: string;
  setCategory: (category: string) => void;
};
type Search = {
  searchResult: string;
  setSearchResult: (searchResult: string) => void;
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
  searchResult: '',
  setSearchResult: (searchResult: any) =>
    set((state) => ({
      ...state,
      searchResult
    }))
}));
