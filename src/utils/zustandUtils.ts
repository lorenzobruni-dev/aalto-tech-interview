import { create } from "zustand";
import { EMPTY_STATE_FILTER, EMPTY_STRING } from "./emptyState";
import { TodoType, TypeFieldsTable } from "./types";

/**
 * Zustand store to manage the reset filter
 */
export const useResetFilters = create((set) => ({
  isClickResetFilterButton: false,
  setIsClickResetFilterButtonToTrue: () =>
    set({ isClickResetFilterButton: true }),
  setIsClickResetFilterButtonToFalse: () =>
    set({ isClickResetFilterButton: false }),
}));

/**
 * Zustand store to manage data fetched from App.tsx and others
 */
export const useDataFetch = create((set, get) => ({
  data: [],
  setData: (data) => set({ data: data }),
  addRowToDataStructure: (newRow: TodoType) => {
    set({ data: [newRow, ...get().data] });
  },
  editRowDataStructure: (editRow: TodoType) => {
    const data: TodoType[] = get().data;
    const rowIndex: number = data.findIndex((index) => index.id === editRow.id);
    if (rowIndex !== -1) {
      data[rowIndex] = { ...data[rowIndex], ...editRow };
      set({ data });
    }
  },
  deleteRowDataStructure: (deleteRow: TodoType) => {
    const data: TodoType[] = get().data;
    const updatedData: TodoType[] = data.filter(
      (index) => index.id !== deleteRow.id,
    );
    set({ data: updatedData });
  },
}));

/**
 * Zustand store to manage resize of screen
 */
export const useSize = create((set) => ({
  isStretched: [],
  setIsStretched: (state) => set({ isStretched: state }),
}));

/**
 * Zustand store to manage applied filters.
 */
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

/**
 * Zustand store to manage the menu user IDs.
 */
export const useMenuUserId = create((set) => ({
  menuItemUserId: [],
  setMenuItemUserId: (state) => set({ menuItemUserId: state }),
}));
