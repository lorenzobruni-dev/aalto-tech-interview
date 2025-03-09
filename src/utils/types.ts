/**
 * Represents a todos.
 * @param id unique identifier of the todos
 * and so on for the other, take a look on TypeFieldsTable type
 */
export type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

/**
 * Represents a subset of TodoType fields used in a table.
 * @param title title todos
 * @param completed represents if task was completed or not
 * @param userId represents which is the owner of that specific task
 */
export type TypeFieldsTable = Pick<TodoType, "title" | "completed" | "userId">;

/**
 * Enum for operation types.
 * @param EDIT - represents an edit operation
 * @param CREATE - represents a create operation
 */
export enum OperationType {
  EDIT,
  CREATE,
}
