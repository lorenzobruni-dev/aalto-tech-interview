import { create } from "zustand";
import { EMPTY_STATE_FILTER, EMPTY_STRING } from "./emptyState";
import { TypeFieldsTable } from "./types";

export const useResetFilters = create((set) => ({
  isClickResetFilterButton: false,
  setIsClickResetFilterButtonToTrue: () =>
    set({ isClickResetFilterButton: true }),
  setIsClickResetFilterButtonToFalse: () =>
    set({ isClickResetFilterButton: false }),
}));

export const useDataFetch = create((set, get) => ({
  data: [],
  setData: (data) => set({ data: data }),
  addRowToDataStructure: (newRow) => {
    const data = get();
    console.log(newRow);
  },
}));

export const useSize = create((set) => ({
  isStretched: [],
  setIsStretched: (state) => set({ isStretched: state }),
}));

export const useFilterApplied = create((set) => ({
  filterApplied: EMPTY_STATE_FILTER as TypeFieldsTable,
  resetFilterApplied: () =>
    set({
      filterApplied: {
        userId: EMPTY_STRING,
        title: EMPTY_STRING,
        completed: true,
      } as TypeFieldsTable,
    }),
  setFilterApplied: (newFilter) =>
    set((state) => ({
      filterApplied: { ...state.filterApplied, ...newFilter },
    })),
}));

export const useMenuUserId = create((set) => ({
  menuItemUserId: [],
  setMenuItemUserId: (state) => set({ menuItemUserId: state }),
}));
