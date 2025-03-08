export type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type TypeFieldsTable = Pick<TodoType, "title" | "completed" | "userId">;

export type UserIDType = { menuItemUserId: number[] };

export enum OperationType {
  EDIT,
  CREATE,
}
