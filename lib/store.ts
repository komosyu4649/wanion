import { useMemo } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type Category = {
  category: string;
  setCategory: (category: string) => void;
};
type Search = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};

export const useCategoryStore = create<Category>((set) => ({
  category: '',
  setCategory: (category: string) =>
    set((state) => ({
      ...state,
      category
    }))
}));

export const useSearchTextStore = create<Search>((set) => ({
  searchText: '',
  setSearchText: (searchText: string) =>
    set((state) => ({
      ...state,
      searchText
    }))
}));
