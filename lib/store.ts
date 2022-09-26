import create from 'zustand';
import { persist } from 'zustand/middleware';

type Category = {
  category: string;
  setCategory: (category: string) => void;
};

export const useCategoryStore = create<Category>((set) => ({
  category: '',
  setCategory: (category: string) =>
    set((state) => ({
      ...state,
      category
    }))
}));
