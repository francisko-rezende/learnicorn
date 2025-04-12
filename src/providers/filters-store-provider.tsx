'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
  type FiltersStore,
  createFiltersStore,
  initFiltersStore,
} from '@/lib/zustand/stores/filters-store';

export type FiltersStoreApi = ReturnType<typeof createFiltersStore>;

export const FiltersStoreContext = createContext<FiltersStoreApi | undefined>(
  undefined,
);

export type FiltersStoreProviderProps = {
  children: ReactNode;
};

export const FiltersStoreProvider = ({
  children,
}: FiltersStoreProviderProps) => {
  const storeRef = useRef<FiltersStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createFiltersStore(initFiltersStore());
  }

  return (
    <FiltersStoreContext.Provider value={storeRef.current}>
      {children}
    </FiltersStoreContext.Provider>
  );
};

export const useFiltersStore = <T,>(
  selector: (store: FiltersStore) => T,
): T => {
  const filtersStoreContext = useContext(FiltersStoreContext);

  if (!filtersStoreContext) {
    throw new Error(`useFiltersStore must be used within FiltersStoreProvider`);
  }

  return useStore(filtersStoreContext, selector);
};
