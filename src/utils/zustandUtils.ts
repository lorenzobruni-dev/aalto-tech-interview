import { create } from "zustand";
import { EMPTY_STATE_FILTER, EMPTY_STRING } from "./emptyState";
import { FilterAppliedType } from "./types";

export const useResetFilters = create((set) => ({
  isClickResetFilterButton: false,
  setIsClickResetFilterButtonToTrue: () =>
    set({ isClickResetFilterButton: true }),
  setIsClickResetFilterButtonToFalse: () =>
    set({ isClickResetFilterButton: false }),
}));

export const useDataFetch = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));

export const useSize = create((set) => ({
  isStretched: [],
  setIsStretched: (state) => set({ isStretched: state }),
}));

export const useFilterApplied = create((set) => ({
  filterApplied: EMPTY_STATE_FILTER as FilterAppliedType,
  resetFilterApplied: () =>
    set({
      filterApplied: {
        userId: EMPTY_STRING,
        title: EMPTY_STRING,
        completed: true,
      } as FilterAppliedType,
    }),
  setFilterApplied: (newFilter) =>
    set((state) => ({
      filterApplied: { ...state.filterApplied, ...newFilter },
    })),
}));
