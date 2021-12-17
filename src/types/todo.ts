interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodoFailureAction {
  type: TodoActionTypes.FETCH_TODOS_FAILURE;
  payload: string;
}

interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoFailureAction
  | SetTodoPageAction;

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}
