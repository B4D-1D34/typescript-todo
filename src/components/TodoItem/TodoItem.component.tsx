import { FC } from "react";
import { deleteTodo, toggleTodo } from "../../store/todoStore";

import { Todo } from "../../types/todo";

import "./TodoItem.styles.scss";

const TodoItem: FC<{
  todo: Todo;
}> = ({ todo }) => {
  const { id, completed, title } = todo;

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <div className="Todo-item" onClick={handleToggle}>
      <div
        className={`Todo-item-title ${completed ? "Todo-item-completed" : ""}`}
      >
        {title}
      </div>
      <div className="Todo-item-delete" onClick={handleDelete}>
        X
      </div>
    </div>
  );
};

export default TodoItem;
