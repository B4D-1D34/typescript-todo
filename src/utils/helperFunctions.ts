import { Todo } from "../types/todo";

export const capitalizeWord = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getTodoFilterCb = (option: string) => {
  if (option === "done") return (todo: Todo) => todo.completed;
  if (option === "undone") return (todo: Todo) => !todo.completed;
  return () => true;
};
