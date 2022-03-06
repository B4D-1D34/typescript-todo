import { createStore, createEvent } from "effector";
import { Todo } from "../types/todo";

export const createTodo = createEvent<Todo>("create todo");
export const deleteTodo = createEvent<string>("delete todo");
export const toggleTodo = createEvent<string>("toggle todo");

const todos = createStore<Todo[]>([
  { id: "1", title: "something", completed: false },
  { id: "2", title: "something", completed: false },
  { id: "3", title: "something", completed: false },
])
  .on(createTodo, (todos, newTodo) => [...todos, newTodo])
  .on(deleteTodo, (todos, id) => todos.filter((t) => t.id !== id))
  .on(toggleTodo, (todos, id) =>
    todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
  );

export default todos;
