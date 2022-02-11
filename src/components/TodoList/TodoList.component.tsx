import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTodoFilterCb } from "../../utils/helperFunctions";
import Todo from "../Todo/Todo.component";
import TodoFilter from "../TodoFilter/TodoFilter.component";
import TodoInput from "../TodoInput/TodoInput.component";

import "./TodoList.styles.scss";

const TodoList = () => {
  const { todos } = useTypedSelector((state) => state.todo);
  const [filterBy, setFilterBy] = useState("all");

  const filteredTodos = todos.filter(getTodoFilterCb(filterBy));

  return (
    <div className="TodoList">
      <TodoInput />
      <TodoFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <div className="TodoList-list">
        {filteredTodos.length ? (
          filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))
        ) : (
          <h2>No suitable todos</h2>
        )}
      </div>
    </div>
  );
};

export default TodoList;
