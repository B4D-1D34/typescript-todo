import { FC } from "react";
import { useActions } from "../../hooks/useActions";

import "./Todo.styles.scss";

const Todo: FC<{ completed: boolean; id: string; title: string }> = ({
  completed,
  id,
  title,
}) => {
  const { deleteTodo, toggleTodo } = useActions();

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
export default Todo;
