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
