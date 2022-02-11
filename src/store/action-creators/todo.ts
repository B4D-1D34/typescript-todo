import { TodoAction, TodoActionTypes, Todo } from "../../types/todo";

export const createTodo = (todo: Todo): TodoAction => ({
  type: TodoActionTypes.CREATE_TODO,
  payload: todo,
});

export const toggleTodo = (id: string): TodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: string): TodoAction => ({
  type: TodoActionTypes.DELETE_TODO,
  payload: id,
});
