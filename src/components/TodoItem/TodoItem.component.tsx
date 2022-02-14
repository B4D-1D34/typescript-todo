import { observer } from "mobx-react-lite";
import { FC } from "react";

import todoStore from "../../store/todoStore";
import { Todo } from "../../types/todo";

import "./TodoItem.styles.scss";

const TodoItem: FC<{
  todo: Todo;
}> = ({ todo }) => {
  const { id, completed, title } = todo;

  const handleDelete = () => {
    todoStore.deleteTodo(id);
  };

  const handleToggle = () => {
    todoStore.toggleTodo(id);
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
export default observer(TodoItem);
