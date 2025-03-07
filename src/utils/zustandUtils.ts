import { create } from "zustand/react";

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
