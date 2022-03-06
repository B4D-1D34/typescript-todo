import { useStore } from "effector-react";
import { FC } from "react";

import $todoStore from "../../store/todoStore";
import { getTodoFilterCb } from "../../utils/helperFunctions";
import TodoItem from "../TodoItem/TodoItem.component";

const List: FC<{ filterBy: string }> = ({ filterBy }) => {
  const todoStore = useStore($todoStore);

  const filteredTodos = todoStore.filter(getTodoFilterCb(filterBy));

  return (
    <>
      {filteredTodos.length ? (
        filteredTodos.map((todo) => (
          <TodoItem key={`${todo.id}__todo`} todo={todo} />
        ))
      ) : (
        <h2>No suitable todos</h2>
      )}
    </>
  );
};

export default List;
