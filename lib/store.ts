import create from 'zustand';
import { persist } from 'zustand/middleware';

type Category = {
  category: string;
  setCategory: (category: string) => void;
};

export const useStore = create<Category>(
  //   persist(
  (set) => ({
    category: '',
    setCategory: (category: string) =>
      set((state) => ({
        ...state,
        category
        // return { category: state.category };
      }))
  })
  //   )
);
