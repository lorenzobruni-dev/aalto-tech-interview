export type TodoType = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
};

export type FilterAppliedType = Pick<TodoType, 'title' | 'completed' | "userId">
