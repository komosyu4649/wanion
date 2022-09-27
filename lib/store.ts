import { useMemo } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type Category = {
  category: string;
  setCategory: (category: string) => void;
};
// type Search = {
//   searchText: string;
//   setSearchText: (searchText: string) => void;
// };

export const useCategoryStore = create<Category>((set) => ({
  category: '',
  setCategory: (category: string) =>
    set((state) => ({
      ...state,
      category
    }))
}));

// export const useSearchTextStore = create<Search>((set) => ({
//   searchText: '',
//   setSearchText: (searchText: string) =>
//     set((state) => ({
//       ...state,
//       searchText
//     }))
// }));

let store: any;

const initialState = {
  // lastUpdate: 0,
  // light: false,
  // count: 0
  searchText: ''
};

function initStore(preloadedState = initialState) {
  return create((set, get) => ({
    ...initialState,
    ...preloadedState,
    setSearchText: (searchText: string) => {
      set({
        searchText: searchText
      });
    }
    // tick: (lastUpdate: any, light: any) => {
    //   set({
    //     lastUpdate,
    //     light: !!light
    //   });
    // },
    // increment: () => {
    //   set({
    //     count: get().count + 1
    //   });
    // },
    // decrement: () => {
    //   set({
    //     count: get().count - 1
    //   });
    // },
    // reset: () => {
    //   set({
    //     count: initialState.count
    //   });
    // }
  }));
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
