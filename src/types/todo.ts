interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: string;
}

interface CreateTodoAction {
  type: TodoActionTypes.CREATE_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: string;
}

export type Todo = {
  completed: boolean;
  id: string;
  title: string;
};

export type TodoAction = CreateTodoAction | DeleteTodoAction | ToggleTodoAction;

export interface TodoState {
  todos: Todo[];
}

export enum TodoActionTypes {
  CREATE_TODO = "CREATE_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}
