import { makeAutoObservable } from "mobx";
import { Todo } from "../types/todo";

class TodoStore {
  todos: Todo[] = [
    { id: "1", title: "something", completed: false },
    { id: "2", title: "something", completed: false },
    { id: "3", title: "something", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  toggleTodo(id: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new TodoStore();
