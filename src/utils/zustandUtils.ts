import { create } from "zustand/react";
import { EMPTY_STATE_FILTER } from "./emptyState";

export const useResetFilters = create((set) => ({
  isClickResetFilterButton: false,
  setIsClickResetFilterButtonToTrue: () =>
    set(() => ({
      isClickResetFilterButton: true,
    })),
  setIsClickResetFilterButtonToFalse: () =>
    set(() => ({
      isClickResetFilterButton: false,
    })),
}));

export const useDataFetch = create((set) => ({
  data: [],
  setData: (state) => set({ data: state }),
}));

export const useSize = create((set) => ({
  isStretched: [],
  setIsStretched: (state) => set({ isStretched: state }),
}));

export const useFilterApplied = create((set) => ({
  filterApplied: EMPTY_STATE_FILTER,
  setFilterApplied: (newFilter) =>
    set((state) => ({
      filterApplied: state.filterApplied.map((filter) =>
        filter.hasOwnProperty(Object.keys(newFilter)[0])
          ? { ...filter, ...newFilter }
          : filter,
      ),
    })),
}));
